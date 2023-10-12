import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const config: Options<PostgreSqlDriver> = {
    entities: ["./dist/entities"],
    dbName: "my-test-db",
    type: "postgresql",
};

export default config;