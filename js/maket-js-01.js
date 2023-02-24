// const x1 = 10;
// const x2 = 30;
// const number = 45;

// console.log(`Число ${number} попадає у відрізок до ${x1}?`, number < x1 );
// console.log(`Число ${number} попадає у відрізок після ${x2}?`, number > x2);

// const res1 = number > x1 && number < x2;
// console.log(`Число ${number} попадає у відрізок от ${x1} до ${x2}?`, res1);

// const res2 = number< x1 || number > x2;
// console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2}?`, res2);

// const x1 = 10;
// const x2 = 30;
// const number = 45;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);

// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// const res1 = number > x1 && number < x2;

// // number > x1 && number < x2
// // 50 > 10 && 50 < 30
// // true && false
// // false

// // 5 > 10 && 5 < 30
// // false && true
// // false

// // 15 > 10 && 15 < 30
// // true && true
// // true
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res1);

// const res2 = number < x1 || number > x2;

// // 150 < 10 || 150 > 30
// // false || true
// // true

// // 25 < 10 || 25 > 30
// // false || false
// // false
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} или после ${x2}? `,
//   res2,
// );

const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34,
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24,
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21,
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27,
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38,
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39,
    },
];

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//     return [...users].sort((a, b) => a.friends.length - b.friends.length)
//     .map(users => users.name);
// };
// console.log(users);
// console.log(getNamesSortedByFriendCount(users));
// // Change code above this line
// Change code below this line
const getSortedFriends = users => {
    // const allFriends = [...users].flatMap(users => users.friends);
    // console.log(allFriends);

    // const filterFriends = allFriends.filter(
    //     (friend, index, array) => array.indexOf(friend) === index);
    // console.log(filterFriends);

    // const sortFriends = filterFriends.sort((a, b) => a.localeCompare(b));
    // console.log(sortFriends);


    return [...users].flatMap(users => users.friends).filter(
        (friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b));
};
console.log(users);
console.log(getSortedFriends(users));
// Change code above this line

// console.log(users);
// const a = users.map(user => user.name);
// console.log(a);
// // // Change code below this line
// const sortByName = users => {
//   return [...users].sort((a, b) => b.name.localeCompare(a.name));
//   };

//   // Change code above this line
//   console.log(sortByName(users));

// Change code below this line

// // Change code below this line
// const getFriends = users => {
//     console.log(users);
//     const allFriends = users.flatMap(user => user.friends);
//     console.log(allFriends);
//     const uniqueFriends = allFriends.filter(
//         (friend, index, array) => array.indexOf(friend) === index
//     );
//     console.log(uniqueFriends);

//     return uniqueFriends;
// };
// // Change code above this line
// console.log(getFriends(users));

// // Change code below this line
// const getTotalFriendCount = users => {
//     return users.reduce((acc, user) => {
//         // console.log(user.friends.length);
//         // console.log(acc);
//         return acc + user.friends.length;
//     }, 0);
// };
// // Change code above this line
// // console.log(users.friends);
// console.log(getTotalFriendCount(users));
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];

//   const sortedByAuthorName = books.sort((a, b) => {
//     console.log(a.author);
//     console.log(b.author);
//     return a.author.localeCompare(b.author);
//   });

//   const sortedByReversedAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));;

//   const sortedByAscendingRating = books;

//   const sortedByDescentingRating = books;

//   console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
//   console.log(sortedByAscendingRating);
//   console.log(sortedByDescentingRating);

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//     {
//         title: 'The Dreams in the Witch House',
//         author: 'Howard Lovecraft',
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((value) => value.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map(book => book.author);

//   console.log(names);
