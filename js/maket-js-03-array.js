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

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let messsage = `Пользователь ${loginToFind} НЕ найден.`;

// for (let i = 0; i < logins.length; i+= 1) {
//     const element = logins[i];

//     if (element === loginToFind) {
//         messsage = `Пользователь ${loginToFind} найден.`;
//         break;
//     }

// }

// const messsage = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} НЕ найден.`;

// console.log(messsage)

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = friends.join(', ');

// console.log(string);

// for (const friend of friends) {
//     string += friend + ",";
// }
// console.log(string);

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//     // console.log(letter);
//     // if (letter === letter.toLocaleLowerCase()) {
//     //     console.log('Ця буква у верхньому регістрі - ', letter);
//     //     invertedString += letter.toLocaleUpperCase();
//     // } else {
//     //     invertedString += letter.toLocaleLowerCase();
//     // }

//     invertedString +=
//         letter === letter.toLocaleLowerCase()
//             ? letter.toLocaleUpperCase()
//             : letter.toLocaleLowerCase();
// }

// console.log(invertedString);



/*
=================Задача 8=====================
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';

// const normalisedTitle = title.toLocaleLowerCase();
// console.log(normalisedTitle);

// const wordsArray = normalisedTitle.split(' ');
// console.log(wordsArray);

// const slug = wordsArray.join('-');
// console.log(slug);

// const slug1 = title.toLocaleLowerCase().split(' ').join('-');
// console.log(slug1);

/*
================= Задача 9 =====================
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const oldClients = [15, 20, 60, 90];
// const newClients = [20, 10,];
// const allArray = array1.concat(array2, oldClients, newClients);
// // console.log(allArray);

// let total = 0;
// let smallNumber = allArray[0];


// for (const iterator of allArray) {
//     total += iterator;
// }
// console.log(total);


// for (const iterator of allArray) {
//     if(iterator < smallNumber){
//         smallNumber = iterator
//     }
// }
// console.log(smallNumber);



/*
================= Задача 10 =====================
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ];
  
//   console.table(cards);
  
// ======================Delet element array==========================
//   const deletedCard = cards.splice(0,2);
//   console.table(cards);
//   console.table(deletedCard);

// cards.splice(3, 2, 'Карточка-6',);
// console.table(cards);