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

// const changeCase = function (string) {
// console.log(string);
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);

// for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
//         invertedString += letter.toUpperCase();
//     } else{
//         invertedString += letter.toLowerCase();
//     }
// }
// return invertedString;

// }

// const changeCase = function (string) {
//         const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();
//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }
//     return invertedString;
// };

// console.log(changeCase('JavaScript')); // jAVAsCRIPT
// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

/*================================ Задача № 6====================================
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// const slugify = function (string) {
//     return string.toLowerCase().split(' ').join('-')
// }

//   console.log(slugify('Top 10 benefits of React framework'));
//   console.log(slugify('Azure Static Web Apps are Awesome'));
//   console.log(slugify('Technical writing tips for non-native English speakers'));

// ======================== ARGUMENTS ==============================
// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
// //   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// function getExtremeElements(array) {
//     // Change code below this line

//     // const a = array[0];
//     // const b = array.length - 1;
//     // const c = array[b];

//     // const newArray = [a, c];
//     // console.log(newArray);

//     return [array[0], array[array.length - 1]];

//     // Change code above this line
// }
// ================= Задачи автоперевірки ================================
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     // let newArray = [];

//     // newArray = firstArray.concat(secondArray).slice(0, maxLength);

//     // return newArray;

// return firstArray.concat(secondArray).slice(0, maxLength);

//     // Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); //["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); //["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); //["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); //["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); //["Earth", "Jupiter", "Neptune", "Uranus"]

// =============================================================================

function calculateTotal(number) {
    // Change code below this line
let total = 0;
    for (let index = 0; index <= number; index += 1) {
        total += index
    }
    return total;
    // Change code above this line
}
console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
//повертає 1 //повертає 6 //повертає 28 //повертає 171 //повертає 300
