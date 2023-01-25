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

// !Задачи на практику об'єктів =============================================
/*
 ? Работа с коллекцией (массивом объектов)
 */
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: true },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     console.log(friend.name);

//     friend.qweqwe = 123123;

//     console.log(friend);
// }
/*
 * Ищем друга по имени
 */
// const lookingFriendByName = function (allFriend, name) {
//     for (const friend of allFriend) {
//         console.log(friend);
//         console.log(friend.name === name);
//         if (friend.name === name) {
//             return "НАЙШЛИ";
//         }
//     }
//     return "Не найшли"
// };
// console.log(lookingFriendByName(friends, 'Kiwi123'));
// console.log(lookingFriendByName(friends, 'Poly'));

/*
 * Отримати імена всіх друзів
 */
// const getAllNames = function (allFriend) {

//     const names = [];

//     for (const friend of allFriend) {
//         // console.log(friend.name);
//         names.push(friend.name);

//     }

//     return names;
// };
// console.log(getAllNames(friends));

/*
 * Отримаємо імена тільки друзів які онлайн
 */
// const getNameOnlineFriends = function (allFriends) {
//     const onlineFriend = [];
//     for (const friend of allFriends) {
//         // console.log(friend.online);
//         if (friend.online) {
//             onlineFriend.push(friend);
//         }
//     }
//     return onlineFriend;
// };

// console.log('Активні', getNameOnlineFriends(friends));

// const getNameOfflineFriends = function (allFriends) {
//     const offlineFriend = [];
//     for (const friend of allFriends) {
//         // console.log(friend.online);
//         if (!friend.online) {
//             offlineFriend.push(friend);
//         }
//     }
//     return offlineFriend;
// };

// console.log('Не активні', getNameOfflineFriends(friends));

// const statusFriend = function (allFriends) {
//     const statusByFriend = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {
//         if (friend.online) {
//             statusByFriend.online.push(friend);
//             continue;
//         }
//         statusByFriend.offline.push(friend);

//         //// const a = friend.online
//         // // ? statusByFriend.online.push(friend)
//         //// : statusByFriend.offline.push(friend);
//     }
//     return statusByFriend;
// };
// console.log(statusFriend(friends));

// ! Автоперевірка ЗАДАЧІ ===========================================

function countProps(object) {
    let propCount = 0;

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            propCount += 1;
            
        }
    }

    // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         propCount += 1;
        
//     }
//   }
    // Change code above this line
    return propCount;
  }
  console.log(countProps({}));  //повертає 0
  console.log(countProps({ name: "Mango", age: 2 }));  //повертає 2
  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));  //повертає 3


//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//     propCount +=1;
//   }
//   }
//     // Change code above this line
//     return propCount;