// const student = [
//     { name: 'mango', score: 83 },
//     { name: 'poli', score: 59 },
//     { name: 'aeix', score: 37 },
//     { name: 'kivi', score: 94 },
//     { name: 'Huston', score: 64 },
// ];
// console.table(student);

// const names = student.map(student => student.name);
// console.log(names);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const courses = students.map(student => student.courses);
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// const course = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(courses);
// console.log(course);

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value < 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// const students = [
//     { name: 'Манго', courses: ['математика', 'фізика'] },
//     { name: 'Полі', courses: ['інформатика', 'математика'] },
//     { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index,
// );
// console.log(uniqueCourses);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//     student => student.score >= LOW_SCORE && student.score < HIGH_SCORE,
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const arrBlue = colorPickerOptions.find(color => color.label === 'blue'); // { label: 'blue', color: '#2196F3' }
// const arrPink = colorPickerOptions.find(option => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
// const arrWhite = colorPickerOptions.find(option => option.label === 'white'); // undefined

// const arrIndexRead = colorPickerOptions.findIndex(
//     option => option.label === 'blue',
// );
// const arrIndexPink = colorPickerOptions.findIndex(
//     option => option.label === 'pink',
// );
// const arrIndexWhite = colorPickerOptions.findIndex(
//     option => option.label === 'white',
// );

// console.log(arrBlue, arrIndexRead);
// console.log(arrPink, arrIndexPink);
// console.log(arrWhite, arrIndexWhite);

// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true

// const element = [1, 2, 3, 4, 5];

// const isBigger = (isBigger) => {
//     return element < 10;
// }

// element.some(isBigger);  // false
// element.some(isBigger); // true

// console.log(element.some(isBigger));

// const element = [1, 2, 3, 4, 5];
// const elementBig = [12, 5, 8, 1, 4];

// const isBiggerThan10 = (isBiggerThan10) => {
//   return element > 10;
// }

// const isBiggerThan11 = isBiggerThan10 => {
//     return element > 10;
// };

// [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
// [12, 5, 8, 1, 4].some(isBiggerThan10); // true

// console.log(element.some(isBiggerThan10));
// console.log(elementBig.some(isBiggerThan10));

// const students = [
//     { name: 'Манго', score: 83 },
//     { name: 'Полі', score: 59 },
//     { name: 'Аякс', score: 37 },
//     { name: 'Ківі', score: 94 },
//     { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//     return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
// }, []);

// console.log(tags);

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);

//         return allTags;
//     }, []);

// console.log(getTags(tweets));

// Change code below this line

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

// const friendName = 'Briana Decker' && 'Goldie Gentry';
// const getUsersWithFriend = (users, friendName) => users.filter(
//         user => user.friends.includes(friendName))
// };

const getSortedFriends = users => {
    return [...users]
        .flatMap(user => user.friends)
        .filter((friends, index, array) => array.indexOf(friends) === index)
        .sort((a, b) => a.friends.localeCompare(b.friends));
};
console.log(getSortedFriends)