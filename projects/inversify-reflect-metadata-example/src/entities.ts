import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Weapon, Warrior, ThrowableWeapon } from "./interfaces";
import { TYPES } from "./types";

@injectable()
class Katana implements Weapon {
    public hit(): string {
        return "cut!";
    }
}

@injectable()
class Shuriken implements ThrowableWeapon {
    public throw(): string {
        return "hit!";
    }
}

@injectable()
class Ninja implements Warrior {
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    constructor(
        @inject(TYPES.Weapon) katana: Weapon,
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon,
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight(): string {
        return this._katana.hit();
    }

    public sneak(): string {
        return this._shuriken.throw();
    }
}

@injectable()
class Ninja2 implements Warrior {
    @inject(TYPES.Weapon) private _katana!: Weapon;
    @inject(TYPES.ThrowableWeapon) private _shuriken!: ThrowableWeapon;

    public fight(): string {
        return this._katana.hit();
    }

    public sneak(): string {
        return this._shuriken.throw();
    }
}

export { Ninja, Katana, Shuriken };