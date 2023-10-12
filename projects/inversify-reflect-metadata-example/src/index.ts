import { Warrior } from "./interfaces";
import { myContainer } from "./inversify.config";
import { TYPES } from "./types";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

console.info(ninja.fight());
console.info(ninja.sneak());