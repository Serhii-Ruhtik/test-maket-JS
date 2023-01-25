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

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        return this.items.push(product);
    },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            console.log(items[i]);
            const { name } = items[i];

            if (productName === name) {
                console.log('найшов продукт', productName);
                console.log('Index', i);
                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;
        

        for (const item of this.items) {

            total += item.price;
        }
        return total;
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.log('Total: ', cart.countTotalPrice());

console.table(cart.getItems());

// console.log(cart.items);

cart.remove('🍎');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());


