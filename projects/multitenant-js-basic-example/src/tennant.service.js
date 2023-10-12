const Queue = require('bull');

const dotenv = require("dotenv");
dotenv.config();

const { db } = require('./db');
const { bootstrap, getTenantConnection } = require('./connection');

const up = async (params) => {
    const job = new Queue(
        `setting-up-database-${new Date().getTime()}`,      
        `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    );

    job.add({ ...params });
    job.process(async (job, done) => {
        try {
            // Postgres requires a role or user for each tenant
            await db.raw(`CREATE ROLE ${params.tenantName} WITH LOGIN;`);

            // you need provide permissions to your admin role
            // in order to allow the database administration
            await db.raw(`GRANT ${params.tenantName} TO ${process.env.POSTGRES_ROLE};`);

            await db.raw(`CREATE DATABASE ${params.tenantName};`);
            await db.raw(`GRANT ALL PRIVILEGES ON DATABASE ${params.tenantName} TO ${params.tenantName};`);

            // refresh tenant connections to include the new one as available
            await bootstrap();

            const tenant = getTenantConnection(params.uuid);
            
            // create all tables in the current tenant database 
            // await migrate(tenant);

            // fill tables with dummy data
            // await seed(tenant);   
        } catch (e) {      
            console.error(e)    
        }
    });
};

module.exports = { up };