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
