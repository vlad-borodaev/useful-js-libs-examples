import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { MikroORM } from "@mikro-orm/core";
import config from "./mikro-orm.config";

export default async function createOrm() {
    return await MikroORM.init<PostgreSqlDriver>(config);
}
