// const callback = function () {
//     console.log("Через 2 секунди  в середені колбека таймфута")
// };

// console.log("код перед таймінгом");

// setTimeout(callback, 2000);

// console.log("код після таймінгом");
// * Функцыя фыльтрація масива ===================
// const array = [1, 2, 3, 4, 5];

// const fil = function (array, test) {
//     //console.log(fil);

//     const newArray = [];

//     // array.forEach(element => {
//     //     console.log(element);
//     // });

//     for (const element of array) {
//         console.log(element);
//         console.log(test(element));

//         const passed = test(element);

//         if (passed) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// };

// const a = function (velue) {
//     return velue >= 3;
// };

// const b = function (velue) {
//     return velue <= 3;
// };

// console.log(fil(array, a));
// console.log(fil(array, b));

// const add = function (a, b, c) {
//     console .log(a, b, c);
//     return a + b + c;
// };

// console.log(add(5, 2, 9));

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];

//   const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//       allTags.push(...tweet.tags);

//       return allTags;
//     }, []);

//   const tags = getTags(tweets);

//   // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
//   // Це стандартна практика, якщо callback-функція досить велика.

//   // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
//   // то створюємо її і записуємо їй значення 0.
//   // В іншому випадку збільшуємо значення на 1.
//   const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
//   };

//   // Початкове значення акумулятора - це порожній об'єкт {}
//   const countTags = tags => tags.reduce(getTagStats, {});

//   const tagCount = countTags(tags);
//   console.log(tagCount);

// *======================= Автоперевірка ==============================
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }

//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }

//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
// ;
//     return callback(pizzaName);
//   }

//   console.log(makeMessage("Ultracheese", deliverPizza));
//   console.log(makeMessage("Royal Grand", makePizza));

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName);
//         }
//         return onError(pizzaName);
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//     // if (numbers[i] % 2 === 0) {
//       // numbers[i] = numbers[i] + value;
//     // }
//   // }

  
// const newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//     newArray.push(number + value) 
//     }
//     if (number % 2 !== 0) {
//         newArray.push(number) 
//         }
//   });

//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //повертає новий масив `[1, 12, 3, 14, 5]`
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));  //повертає новий масив `[12, 18, 3, 7, 14, 16]`
// console.log(changeEven([17, 24, 68, 31, 42], 100)); //повертає новий масив `[17, 124, 168, 31, 142]`
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));  //повертає новий масив `[144, 13, 81, 192, 136, 154]`
// console.log(changeEven([20,16,5,11,17,24,6,9,12], 9 )); //ункції з випадковими, але валідними аргументами, повертає правильне значення.Результатом виклику функції ) буде [29,25,5,11,17,33,15,9,21]

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genr, index, array) => array.indexOf(genr) === index);
  

//   console.log(allGenres);
//   console.log(uniqueGenres);


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 !== 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 === 0);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);
