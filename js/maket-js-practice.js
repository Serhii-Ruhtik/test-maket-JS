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

//!======= Problem 4 ========
//* У нас є обєкт, в якому зберігаються зарплати нашої команди. Напишіть код для обчислення суми всіх зарплат і збережіть його результат у зміній sum. Якщо об'єкт salaries порожній, то результат має бути 0.

