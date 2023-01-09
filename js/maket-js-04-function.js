/*========================= Задача 1=========================
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);
// В КРУГЛИХ ДУЖКА ПАРАМЕТРИ НЕ ЗАБУВАЙ ЦЕ ЩО В ФУНКЦІЇ БУДЕ РОБИТИСЯ
// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции: ', items);

//     let total = 0;

//     for (const item of items) {
//       total += item;
//     }

//     return total;
//   };
// //   АРГУМЕНТИ ЦЕ ЗНАЧЕННЯ ДЛЯ ПАРАМЕТРІВ
//   const r1 = calculateTotalPrice([1, 2, 3]);
//   console.log(`Общая сумма покупок ${r1}`); // 6

//   const r2 = calculateTotalPrice(cart);
//   console.log(`Общая сумма покупок ${r2}`); // 50

//   console.log(calculateTotalPrice([100, 200, 300])); // 600

/*====================== Задача 2=============================
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

// const names = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// logItems(names);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

/*====================== Задача 3=============================
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`;
//         }
//     }
//     return `Пользователь ${loginToFind} НЕ найден.`;
// }

// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} НЕ найден.`;

// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

/*================================ Задача № 4====================================
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// ==========================Зa допомогою <<<for>>> =======================
// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i += 1) {
//         // console.log(numbers[i])
//         if (numbers[i] < smallestNumber) {
//             smallestNumber = numbers[i];
//         }
//     }
//     return smallestNumber;
// };

// ==========================Зa допомогою <<<for of>>> =======================
// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// };

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4



//================================ Задача № 5====================================
/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const changeCase = function (string) {
console.log(string);
const letters = string.split('');
cl

}




console.log(changeCase('JavaScript')); // jAVAsCRIPT
console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX