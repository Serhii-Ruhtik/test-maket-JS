/*
 * Наследование
 *  - extends
 *  - super()
 */
class Hero {
    constructor({ name = 'hero', xp = 0 }) {
        this.name = name;
        this.xp = xp;
    }
    gainXp(amount) {
        console.log(`${this.name} отримує ${amount} досвіду.`);
        this.xp += amount;
    }
    attack() {
        console.log(`${this.name} атакує використовуючи ${this.weapon}`);
    }
}

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);
        this.weapon = weapon;
    }
}

class Berseck extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berseck({
    name: 'ajax',
    xp: 500,
    weapon: 'axe',
    warcry: 'waaaaaah',
});
console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp(525);

console.log(ajax);


class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} використовує магію`);
    }
}

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'knife' })

// console.log(mango);
// mango.attack();
// mango.gainXp(1000);
// console.log(mango);

// const poly = new Mage ({ name: 'poly', xp: 500, spells: ['incantation'] });

// console.log(poly);
// poly.cast();
// poly.gainXp(1000);
// console.log(poly);

// console.log('Warrior.prototype', Warrior.prototype);
// console.log('Hero.prototype', Hero.prototype);

// !============================================================
// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );
