// //!======= Problem 1 ========
// //* Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти чи має
// //* об'єкт такий ключ - поверне true, інакше false.

// const obj = {
//     name: 'jhon',
//     car: 'Audi',
//     carColor: 'White',
// };

// // console.log(obj);
// const checkObjectKey = function (key) {
//     // todo ===== VERSION 1 =========
//     // const a = Object.keys(obj);
//     // return a.includes(key);

//     // todo ===== VERSION 2 =========
//     // return Boolean(obj[key]);

//     // todo ===== VERSION 3 =========
//     return key in obj;
// };

// console.log(checkObjectKey(obj.qweq));
// console.log(checkObjectKey('name'));
// console.log(checkObjectKey('qqqqqqqq'));
// //!====================================

// //!======= Problem 2 ========
// //* Створіть функцію multiplyNumeric(obj)
// //* яка множить всі числові властивості obj на 2/

// // до виклику функції
// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu',
// };

// console.log(menu);

// const multiplyNumeric = function (obj) {
//     // todo ===== VERSION 1 =========
//     for (const key in obj) {
//         console.log(obj[key]);
//         if (typeof obj[key] === 'number')
//         {
//         obj[key] *= 2;
//         }
//         ;
//     }

// };
// multiplyNumeric(menu);
// console.log(menu);
//!====================================

// //!======= Problem 3 ========
// //* Напишіть функцію для перевірки об'єкта
// //* чи є елемет простим об'єктом,
// //* чи масивом, null.

// const parametrObject = {};
// const parametrArray = [];
// const parametrNull = null;

// // console.log(typeof parametrObject);
// // console.log(typeof parametrArray);
// // console.log(typeof parametrNull);
// // console.log(typeof false);
// // console.log(typeof 1);
// // console.log(typeof '');

// function checkObj(params) {
//     if (typeof params === 'object') {
//         if (Array.isArray(params)) {
//             return 'Array';
//         } else if (params === null) {
//             return 'Null';
//         } else {
//             return 'Obj';
//         }
//     } else {
//         return typeof params;
//     }
// }

// console.log(checkObj({}));
// console.log(checkObj([]));
// console.log(checkObj(null));
// console.log(checkObj(false));
// console.log(checkObj(1));
// console.log(checkObj(''));
//!====================================

// //!======= Problem 4 =================================
// //* У нас є обєкт, в якому зберігаються зарплати нашої команди. Напишіть код для обчислення суми всіх зарплат і збережіть його результат у зміній sum. Якщо об'єкт salaries порожній, то результат має бути 0.
// const sal = {};
// const salaries = {
//     Mango: 570,
//     Poli: 900,
//     Ajax: 1470,
// }

// function totalSalar(salaries) {
//     // todo ===== VERSION 1 =========
//     // let sum = 0;
//     // const values = Object.values(salaries);
//     // for (const value of values) {
//     //     sum += value;
//     // }
//     // return sum;

//     // todo ===== VERSION 2 =========
//     // let sum = 0;
//     // for (const key in salaries) {
//     //     sum += salaries[key];
//     // }
//     // return sum;

// }
// console.log(totalSalar(salaries));
// console.log(totalSalar(sal));
//!===================================================

//!======= Problem 5 =================================
//* Напишіть функцію calcTotalPrice(stones, stonesName),
//* яка приймає масив обєктів і рядок з назвою каменю.
//* Функція повертає загальну кількість каміння з таким ім'ям.
// const stones = [
//     { name: 'Elerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 6 },
//     { name: 'Sapphire', price: 400, quantity: 7 },
//     { name: 'Rubble', price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//     // todo ===== VERSION 1 ===================
//     // let total = 0;
//     // let name = stonesName
//     // for (const key of stones) {
//     //     // console.log(key.name);
//     //     if (key.name === stonesName) {
//     //         total = key.price * key.quantity
//     //     }
//     // }
//     // return name + ' ' + '-' + ' ' + total;

//     // todo ===== VERSION 2 ====================
//     const stone = stones.find(element => element.name === stonesName);
//         // console.log(stone);
//         if (stone) {
//             const { price, quantity } = stone;
//             return price * quantity;
//         }

// }

// console.log(calcTotalPrice(stones, 'Elerald'));
// console.log(calcTotalPrice(stones, 'Diamond'));
// console.log(calcTotalPrice(stones, 'Sapphire'));
// console.log(calcTotalPrice(stones, 'Rubble'));
// console.log(calcTotalPrice(stones, 'almaz'));
//!===================================================

//!======= Problem 6 =================================
//* Напишіть функцію для об'єднанння необьужених масивів
//* Функція addArray повертає об'єднаний масив шляхом поєднання всіх масивів переданих як  аргумент функції.

// console.log(addArray([2, 3, 4], [6, 4, 9], [34, 6, 4]));

// function addArray(...arg) {
// todo ===== VERSION 1 ========= flatMap ==========

//return arg.flatMap(element => element);

//     // todo ===== VERSION 2 ========= concat ==========

//     // let newArray = [];

//     // for (const array of arg) {
//     //     console.log(array);

//     //     newArray = newArray.concat(array);
//     // }
//     // return newArray;

//     // // todo ===== VERSION 2 ========= map ==========
//     // return arg.map(element => [element, ...element]);
// }

//!===================================================

//!======= Problem 7 =================================

