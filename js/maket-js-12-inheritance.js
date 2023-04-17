/*
 * Наследование
 *  - extends
 *  - super()
 */
class Hero {
    constructor(name = "hero", xp = 0) {
        this.name = name;
        this.xp = xp;
}
gainXp(amount){
    console.log(`${this.name} отримує ${amount} досвіду.`)
    this.xp += amount;
}
}

// const mango = new Hero({
//     name: "mango",
//     xp: 1000
// })

// console.log(mango);
// mango.gainXp(1000);
// console.log(mango);

class Warrior extends Hero {
    constructor(name, xp, weapon,) {
        super(name, xp);
        this.weapon = weapon;
    }
}

const lemon = new Warrior('lemon', 1250, 'knife')

console.log(lemon);
lemon.gainXp(1000);
console.log(lemon);


console.log('Warrior.prototype', Warrior.prototype);
console.log('Hero.prototype', Hero.prototype);

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