/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//     z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 10;

// const objA = Object.create(objB);
// objA.a = 15;

// console.log('objC', objC);
// console.log('objB', objB);
// console.log('objA', objA);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */
//!=================================================================================
//! ============= Constructors =====================================================
/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// const Car = function ({ brand, model, price, } = {}) {
//const  { brand, model, price, } = params;
    // 2. Функция вызывается в контексте созданного объекта,
    //    то есть в this записывается ссылка на него
    // this.brand = brand;
    // this.model = model;
    // this.price = price;
// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)


    //4. Ссылка на обьект возвращается в место вызова new Car
//};

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :)')

// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }
//console.log(Car.prototype)

// Якщо функція викликається через new, створюється пустий обє'кт.
// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });
//console.log(myCar);
// myCar.sayHi();
// myCar.changePrice(36000);
// console.log(myCar);

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'x5',
//     price: 50000,
// });
// console.log(myCar2);
// myCar2.sayHi();

// const myCar3 = new Car({
//     brand: 'Audi',
//     model: 'A8',
//     price: 60000,
// });
// console.log(myCar3);
// myCar3.sayHi();

// !================== test ============================================
// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };

// const mango = new User({
//     email: 'mango@mail.com',
//     password: 12345,
// });
// console.log(mango);

// mango.changeEmail('my-new-mail@mail.com')
// console.log(mango);
