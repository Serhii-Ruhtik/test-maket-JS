// const friends = [
//     { name: 'Vova', online: false },
//     { name: 'Mark', online: false },
//     { name: 'Poli', online: true },
//     { name: 'Bob', online: false },

// ];
// console.table(friends)

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         }
//             friendsByStatus.offline.push(friend);
//     }
//     return friendsByStatus;

// };
// console.log(getFriendsByOnlineStatus(friends));

// =============================================
/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };
//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {
//             const item = items[i];
//             if (productName === item.name) {
//                 console.log('нашли такий обєкт', productName);
//                 console.log('індекс', i);

//                 items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         let total = 0;

//         for (const { price, quantity } of this.items) {
//             total += quantity * price;
//         }

//         return total;
//     },
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍋');
// console.table(cart.getItems());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// ================================================

// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     isPublic: true,
//     rating: 8.38,
// };

// const accessType = book.isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

// console.log(accessType);

// console.log(message);

// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     isPublic: true,
//     rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// console.log(message);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480
