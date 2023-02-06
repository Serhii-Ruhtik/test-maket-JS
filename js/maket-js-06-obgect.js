/*
 * найти саме маленьке і саме велике число температур
 */
// const temper = [37,12,5,9,11,41,32,17,-1]

// console.log(Math.min(...temper));
// console.log(Math.max(...temper));
// console.log(Math.round(...temper));
// console.log(Math.random(...temper));

// const a = {
//     x: 1,
//     y: 2,
// }
// const b = {
//     z: 5,
//     d: 4,

// }
// const c = {
//     x: 3,
//     z: 10,
//     c: {
//         f: "qqq",
//         s: 1000
//     }
// }

// const d = { ...a, ...b, ...c,}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log("Новий масив", d);

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
//         console.table(this.items);

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
//             console.log(items[i]);
//             const { name } = items[i];

//             if (productName === name) {
//                 console.log('найшов продукт', productName);
//                 console.log('Index', i);
//                 items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         let total = 0;

//         for (const item of this.items) {
//             total += item.price;
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
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.log('Total: ', cart.countTotalPrice());

// console.table(cart.getItems());

// console.log(cart.items);

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (let key of keys) {
//     values.push(apartment[key]);
// }

// console.log(values);

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;

//     const keys = Object.keys(object);
//     for (const key of keys) {
//         // console.log(keys);

//         propCount = keys.length;
//     }

//     // for (const key in object) {
//     //     if (object.hasOwnProperty(key)) {
//     //         propCount += 1;
//     //     }
//     // }

//     return propCount;
//     // Change code above this line
// }

// console.log(countProps({})); //повертає 0
// console.log(countProps({ name: "Mango", age: 2 })); //повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //повертає 3

// !================================= Задачи ==========================================

// * ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ=====================

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     const salaryList = Object.values(salaries);
//     // console.log(salaryList);

//     for (const salary of salaryList) {
//         totalSalary += salary;
//     }
//     // Change code above this line
//     return totalSalary;
// }

// console.log(countTotalSalary({})); //повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //повертає 400

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

//   console.log(hexColors);
//   console.log(rgbColors);

//   *              ========================================
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Change code below this line

//     let price = null;
//   for (const product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//         price = product.price;
//     }
//   }

//   return price;
//     // Change code above this line
//   }
//   console.log(getProductPrice("Radar"));  //повертає 1300.
//   console.log(getProductPrice("Grip"));  //повертає 1200.
//   console.log(getProductPrice("Scanner"));  //повертає 2700.
//   console.log(getProductPrice("Droid"));  //повертає 400.
//   console.log(getProductPrice("Engine"));  //повертає null.

//   *ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ==================
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     let emptyArray = [];
//     for (const product of products) {
//         // console.log(product);

//         const keys = Object.keys(product);

//         for (const key of keys) {
//             // console.log(key);
//             // console.log(product[key]);

//             if (propName === key) {
//                 emptyArray.push(product[key]);
//             }
//         }
//     }

//     return emptyArray;
//     // Change code above this line
// }
// console.log(getAllPropValues('quantity')); //повертає [4, 3, 7, 9]
// console.log(getAllPropValues('price')); //повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); //повертає []
// console.log(getAllPropValues('name')); //повертає ["Radar", "Scanner", "Droid", "Grip"]

// *ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ==============================================
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Change code below this line
//     let totalPrice = 0;
//     for (const product of products) {

//             if (productName === product.name) {
//                 totalPrice = product.price * product.quantity;

//         }
//     }

// return totalPrice;
//     // Change code above this line
// }
// console.log(calculateTotalPrice("Blaster"));  //повертає 0
// console.log(calculateTotalPrice("Radar"));  //повертає 5200
// console.log(calculateTotalPrice("Droid"));  //повертає 2800
// console.log(calculateTotalPrice("Grip"));  //повертає 10800
// console.log(calculateTotalPrice("Scanner"));  //повертає 8100

// *======== ЗАДАЧА. КАРТКИ ЗАВДАНЬ ====================================
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//     let objectData = {};
//     objectData = { completed, category, priority, ...data,}

//   return objectData;
//     // Change code above this line
//   }
// console.log(makeTask({}));
// //повертає { category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// //повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// //повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// //повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" }));
// //повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// *======== ЗАДАЧА. МАСИВ ЗБІГІВ ====================================
// // Change code below this line
// function findMatches(array, ...args) {
//     const matches = []; // Don't change this line
// //   console.log(args);

//   for (const arg of args) {
//     // console.log(arg);

//     if (array.includes(arg)) {
//         matches.push(arg);
//     }
//   }
//     // Change code above this line
//     return matches;
//   }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));  //повертає [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));  //повертає [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));  //повертає [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));  //повертає []

// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         // const bookIndex = this.books.indexOf(oldName);
//         // this.books.splice(bookIndex, 1, newName);

//         const bookShelf = this.books.indexOf(oldName);
//         this.books.splice(bookShelf, 1, newName);

//         return;

//         // Change code above this line
//     },
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles')); //значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// console.log(bookShelf.updateBook('The last kingdom', 'Dune')); //значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// *=================================================================================

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
addPotion(newPotion) {
        const {potions} = this;
    for (let i = 0; i < potions.length; i += 1) {
        const item = potions[i];
      if (item.name === newPotion.name) {
         return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
  potions.push(newPotion);
  },
  removePotion(potionName) {
        const {potions} = this;
    for (let i = 0; i < potions.length;i+=1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
        return;
      }
    }
      return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  updatePotionName(oldName, newName) {
        const {potions} = this;
    for (const potion of potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        return;
      }
    }
  },
  // Change code above this line
};


// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         if (this.potions.includes(newPotion)) {
//             return `Error! Potion ${newPotion} is already in your inventory!`;
//         }

//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         const potionIndex = this.potions.indexOf(potionName);

//         if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.potions.indexOf(oldName);

//         if (potionIndex === -1) {
//             return `Potion ${oldName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
// };
