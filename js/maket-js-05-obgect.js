// const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
// const citiesEurope = ['Берлин', 'Прага', 'Париж']

// const citiesRussiaWithPopulation = {
//   Moscow: 20,
//   SaintPetersburg: 8,
//   Kazan: 5,
//   Novosibirsk: 3
// }

// const citiesEuropeWithPopulation = {
//   Moscow: 26,
//   Berlin: 10,
//   Praha: 3,
//   Paris: 2
// }

// //! Spread====================================================================
// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesEurope, ...citiesRussia]
// // const allCities = citiesEurope.concat(citiesRussia)
// console.log(allCities)

// console.log({...citiesRussiaWithPopulation})
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})

// /// Practice
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))

// //! Rest========================================================================
// function sum(a, b, ...rest) {
//   return a + b + rest.reduce((a, i) => a + i, 0)
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(sum(...nums))

// // const a = nums[0]
// // const b = nums[1]

// const [a, b, ...other] = nums
// console.log(a, b, other)

// const person = {
//   name: 'Max',
//   age: 20,
//   city: 'Moscow',
//   country: 'Russia'
// }

// const {name, age, ...address} = person

// console.log(name, age, address)

// const username = "Sasha";
// const ega = 30;
// const city = "Kiev";
// const street = "Kharkiv";

// const card = {
// username,
// ega,
// city,
// street,
// }

// console.log(card);

// * Методи об'єктів ========================================================

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],

//     changeName(newName) {
//         console.log("this силається на об'єкт playlist", this);
//         this.name = newName;
//     },

    
// };

// playlist.changeName('New Playlist');

// console.log(playlist);

// *Задачи на практикуобєктів =============================================
