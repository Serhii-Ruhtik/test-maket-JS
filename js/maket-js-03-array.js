/*
Порахувати загальну суму покупок в корзині
*/

// const cart = [54, 28, 105, 70, 92, 17, 120, 100, 200];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     total += cart[i];
// }

// for (const i of cart) {
//     total += i;
// }
// console.log('Total:', total);
// перебрати масив for
// зробити pмінну total де буде сума.
// кожний елемент приплюсувати до total.

// /*
//  *Написати скрипт який підраховує суму всіх парних чисел в масиві
//  */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// // зробити переміну total;
// let total = 0;
// let totalNot = 0;

// // перебрати масив;
// for (let i = 0; i < numbers.length; i += 1) {
//     // console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {
//         total += numbers[i];

//         // console.log('Парні', numbers[i]);
//     } else if (numbers[i] % 2 !== 0) {
//         totalNot += numbers[i];
//         // console.log("Не парні", numbers[i]);
//     }
// }
// console.log('Сума парних чисел - ', total);
// console.log('Сума НЕ парних чисел - ', totalNot);

// // на кожну операцію визначити парні числа

// // якщо число парне додати його в total

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let messsage = `Пользователь ${loginToFind} НЕ найден.`;

// for (let i = 0; i < logins.length; i+= 1) {
//     const element = logins[i];

//     if (element === loginToFind) {
//         messsage = `Пользователь ${loginToFind} найден.`;
//         break;
//     }

// }

const messsage = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} НЕ найден.`;

console.log(messsage)
