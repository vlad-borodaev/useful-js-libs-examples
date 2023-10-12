// Multi dialect query builder for Node.js

const knexConfig = {
    client: "sqlite3",
    connection: {
        filename: "./data.db"
    },
};
const knex = require("knex")(knexConfig);

const createTable = async () => {
    await knex.schema
        .createTable("users", (table) => {
            table.increments("id");
            table.string("name");
        })
        .createTable("accounts", (table) => {
            table.increments("id");
            table.string("name");
            table.integer("user_id").unsigned().references("users.id");
        });
};

const insertData = async () => {
    const insertedRows = await knex("users")
        .insert({
            name: "Jack"
        });

    await knex("accounts").insert({
        name: "some account name",
        user_id: insertedRows[0],
    });
};

const queryData = async () => {
    const selectedRows = await knex("users")
        .join("accounts", "users.id", "accounts.user_id")
        .select("users.name as user", "accounts.name as account");

    const enrichedRows = selectedRows.map((row) => ({
        ...row,
        active: true,
    }));

    console.info("enrichedRows", enrichedRows);
};

const run = async () => {
    try {
        await createTable();
        await insertData();
        await queryData();
    } catch (err) {
        console.error(err);
    }
};

run();