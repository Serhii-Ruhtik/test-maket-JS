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

/* ================================ Задача № 6====================================
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
//! ================= Задачи автоперевірки ================================
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

//! =============================================================================

// function calculateTotal(number) {
//     // Change code below this line
// let total = 0;
//     for (let index = 0; index <= number; index += 1) {
//         total += index
//     }
//     return total;
//     // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// //повертає 1 //повертає 6 //повертає 28 //повертає 171 //повертає 300

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     // Change code above this line
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice());

// ==============================================================================
// !Саме довше слово в рядку
// ==============================================================================

// function findLongestWord(string) {
//     // Change code below this line
//     let longWord = '';
//     const word = string.split(' ');

//     for (let i = 0; i < word.length; i += 1) {
//         if (word[i].length > longWord.length) {
//             longWord = word[i];
//         }
//     }

//     console.log(word);
//     return longWord;
//     // Change code above this line
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// ===============================================================================
//! ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// ====================================================================================
// function filterArray(numbers, value) {
//     // Change code below this line
//     let newArray = [];
//     // console.log(numbers);
//     // console.log(value);
// for (let i = 0; i < numbers.length; i+= 1) {
// if (numbers[i] > value) {
//     newArray.push(numbers[i])
// }
// }
// return newArray;
//    // Change code above this line
//  }

// console.log(filterArray([1, 2, 3, 4, 5], 3));  //повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));  //повертає []
// console.log(filterArray([1, 2, 3, 4, 5], 4));  //повертає [5]
// console.log(filterArray([12, 24, 8, 41, 76], 38));  //повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));  //повертає [24, 41, 76]

// const numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i += 1) {
//     const element = numbers[i];
//     console.log(element);
// }

// ================================================================================
//! ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ
// ================================================================================
/*Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

Оголошена функція getCommonElements(array1, array2)
Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
В циклі for використовувалися методи includes і push*/

// function GetCommonelements(array1, array2) {
//     let newArray = [];
//     for (const i of array1) {
//         if (array2.includes(i)) {
//             newArray.push(i)
//         }

//     }
//     return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ========================================================================================
// ! ЗАДАЧА: ПАРНІ ЧИСЛА
// ========================================================================================

// function getEvenNumbers(start, end) {
//     // Change code below this line
//    let evenNumders = []
//  for (let i = start; i <= end; i += 1) {
//    if (i % 2 === 0) {
//      evenNumders.push(i);
//    }
//  }

//  return evenNumders;
//      // Change code above this line
//    }

//  console.log(getEvenNumbers(2, 5));  //повертає [2, 4]
//  console.log(getEvenNumbers(3, 11));  //повертає [4, 6, 8, 10]
//  console.log(getEvenNumbers(6, 12));  //повертає [6, 8, 10, 12]
//  console.log(getEvenNumbers(8, 8));  //повертає [8]
//  console.log(getEvenNumbers(7, 7));  //повертає []
//  console.log(getEvenNumbers());

// ===========================================================================================
// ! ЗАДАЧА: ФУНКЦІЯ INCLUDES()
// // ==========================================================================================
// function includes(array, value) {

//     for (const i of array) {
//         if (i === value) {
//             return true;
//         }
        
//     }
//     return false;
// }







// console.log(includes([1, 2, 3, 4, 5], 3)); //повертає true
// console.log(includes([1, 2, 3, 4, 5], 17)); //повертає false
// console.log(
//     includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'),
// ); //повертає true
// console.log(
//     includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'),
// ); //повертає false
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum')); //повертає true
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')); //повертає false
// console.log(includes()); //для випадкового масиву з випадковим value повертає правильний boolean
// //У функції includes використовується for, return, але не метод масиву includes
