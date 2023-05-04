// function hello () {
//     console.log('Hello', this);
// }

// const person = {
// name: 'Vova',
// age: 25,
// sayHello: hello,
// }

// console.log(person.sayHello());

// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log('showTag -> this', this);//1 спосіб строгий режим працює
//     },

//     showTag1: function () {
//         console.log('showTag -> this', this);//2 спосіб строгий режим працює
//     },

//     showTag2: () => {
//         console.log('showTag -> this', this);//3 спосіб строгий режим не працює
//     }
// }

// user.showTag();//1 спосіб строгий режим працює
// user.showTag1();//2 спосіб строгий режим працює
// user.showTag2();//3 спосіб строгий режим не працює

/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

//showTag();

// const user ={
//     tag: 'Mango'
// };
// console.log('user', user);

// я додаю в user нову властивість showUserTag із значенням записую посилання на функцію showTag.
// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

/*
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 * Контекст в callback-функциях
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

/*
 * Тренируемся 1
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

//fn(); // Какой this ???

/*
 * Тренируемся 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };
// console.log(book.showTitle());
//book.showThis(); // Какой this ???

//const outerShowThis = book.showThis;
//outerShowThis(); // Какой this ???

//const outerShowTitle = book.showTitle;
//outerShowTitle(); // Какой this ???

/*
 * Тренируемся 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     //changeColor(); // Какой this ???

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     sweater.updateColor('red'); // Какой this ???

//     return sweater.updateColor;
// };

// makeChangeColor();
//console.log(makeChangeColor());

// const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???

/*
 * Тренируемся 4
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);

//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();
// //updateColor('yellow'); // Какой this ???

// const hat = {
//     color: 'blue',
//     updateColor: updateColor,
// };

// hat.updateColor('orange'); // Какой this ???

/*
 * Тренируемся 5
 */

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

//!===========================================================================
//! Функція це обєкт і в неї також є методи 02-fn-methods.
//!===========================================================================

/*
 * call и apply
 */
// const showThis = function (a, b, c) {
//     console.log(a, b, c);
//     console.log('showThis -> this', this);
// };
// // console.dir(showThis);

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };
// showThis.call(objA, 10, 20, 30,)

// const objB = {
//     a: 50,
//     b: 100,
// };
// showThis.apply(objB, [100, 200, 300])

// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',

// };
// console.log(hat);
// changeColor.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//     color: 'green',
// };
// console.log(sweater);
// changeColor.apply(sweater, ['blue']);
// console.log(sweater);

/*
 * bind
 */
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

//!===========================================================================
//! Тренуємось вирішувати задачі. Ключове слово this.
//!===========================================================================
// todo=====================================================================
// const shop = {
//     stones: [
//         { name: 'Ruby', price: 100, qty: 10 },
//         { name: 'Diamond', price: 150, qty: 15 },
//         { name: 'Saphire', price: 200, qty: 20 },
//     ],

//     calcTotalPrise(stoneName) {
//         const jem = this.stones.find(stone => stone.name === stoneName);

//         if (jem) {
//             const { price, qty } = jem;
//             return price * qty;
//         }
//         return 'not stone';
//     },
// };

// console.log(shop.calcTotalPrise('Diamond'));

// console.log(shop.calcTotalPrise('asdf'));
// todo====================================================================
// ?======================================================================
// const calculator = {
//     a: null,
//     b: 0,
//     read(a, b) {
//         this.a = a,
//         this.b = b
//     },
//     add() {
//         return this.a + this.b;
//     },
//     mult() {
//         return this.a * this.b;
//     },
// };

// calculator.read(7, 7);
// console.log(calculator.a, calculator.b);
// console.log(calculator.add());
// console.log(calculator.mult());

// ?========================================================================
// todo====================================================================
// const icon = {
//     _color: '#fff',
//     _size: '24px',
//     _padding: '16px',

//     color(newColor) {
//         this._color = newColor;
//         return this;
//     },
//     size(newSize) {
//         this._size = newSize;
//         return this;
//     },
//     padding(newP) {
//         this._padding = newP;
//         return this;
//     },
// };

// // console.log(icon);

// // icon.color('blue');
// // icon.size('40px');
// // icon.padding('60px');
// // console.log(icon);

// icon.color('blue').size('40px').padding('60px');
// console.log(icon);

// todo====================================================================
// ?=======================================================================
// function sayHello() {
//     console.log('sayHello', this);
// }

// ?=======================================================================
//!===========================================================================
//! Застосування методів функції.
//!===========================================================================

// const counter =  {
//     value: 0,
//     increment(){
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement(){
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },

// };

// const incrementBtn = document.querySelector('.js-increment');
// const decrementBtn = document.querySelector('.js-decrement');
// const valueEl = document.querySelector('.js-value');

// console.log(incrementBtn);
// console.log(decrementBtn);
// console.log(valueEl);

// decrementBtn.addEventListener('click', function () {
//     console.log('Зменшити значення');

//     counter.decrement();
//     console.log(counter);

//     valueEl.textContent = counter.value;

// });

// incrementBtn.addEventListener('click', function () {
//     console.log('Добавити значення');

//     counter.increment();
//     console.log(counter);

//     valueEl.textContent = counter.value;
// });
