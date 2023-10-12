import { Entity, PrimaryKey } from "@mikro-orm/core";
import { v4 as uuid } from "uuid";

@Entity()
export class Book {
    @PrimaryKey()
    id = uuid();
}