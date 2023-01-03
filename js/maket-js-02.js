/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// // 1. зробити перемінні
// const employees = 12;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;
// // 2. перебрати працівників
// for (let i = 1; i <= employees; i += 1) {
// // 3. зробити случайну зп
// const solary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Випадкова ЗП працівника ${i} - ${solary}`);

//     totalSalary += solary;
// }
// // 4. записоти лог
// console.log(`TotalSalery - ${totalSalary}`);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// //  1 вары
// const min = 5;
// const max = 15;
// let total = 0;

// for (let i = min; i < max; i += 1) {
// // Перевіряємо залишок від ділення
//     if (i % 2 !== 0) {
//         // console.log(`Не парні: ${i}`);
//         continue;
//     }
//     console.log(`Парні числа ${i}`);
//         total += i;
// }
// console.log(`TOTAL: ${total}`);
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     const totalPrice = pricePerDroid * orderedQuantity;
//     let message = `You ordered ${orderedQuantity} droids, you have ${
//         customerCredits - totalPrice
//     } credits left`;
//     // Change code below this line
    
//     if (totalPrice > customerCredits) {
//         message = 'Insufficient funds!';
//     } 
    
//     // Change code above this line
//     return message;
// }
// console.log(makeTransaction(1000, 3, 15000));
