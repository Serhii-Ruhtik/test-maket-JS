// class Car {
//     static description = 'Класс описуючий автомобіль';

//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }

//     #test = 'test'; //приватне значення.

//     constructor({ brand, model, price } = {}) {
//         // console.log('виконується конструктор');
//         // console.dir(this);
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     get modelCar() {
//         return this.model;
//     }
//     set modelCar(newModal) {
//         this.model = newModal;
//     }

//     // getModel(){
//     //     return this.model;
//     // }

//     // setModel(newModel) {
//     //     this.model = newModel;
//     // }
// }

// // console.log(Car.description);
// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance);

// console.log(carInstance.modelCar); //todo //читається функція.
// carInstance.modelCar = 'Q7'; //todo //записується у функцію.
// console.log(carInstance.modelCar); //todo // читається функція змінене значеннняю
// // console.log(carInstance.getModel());//* спростився інтерфейс.
// // carInstance.setModel('Q7'); //* тут ми викликали метод.
// // console.log(carInstance.getModel());
// !========================================================================
// !Прототипи, класси, конструктори.
// !========================================================================
// function Phone (brand, price, discount){
// this.brand = brand;
// this.price = price;
// this.discount = discount;
// }
// samsung - instance
// samsung - екземпляр класу

// const samsung = new Phone('Samsung', 600, 10);
// const apple = new Phone('Apple', 1300, 5);
// ! ========instanceof========= перевіряємо.
// console.log(samsung instanceof String);
// console.log(samsung instanceof Number);
// console.log(apple instanceof Phone);
// console.log(samsung instanceof Phone);
// !=========== ES5 наслідування old school=================================
// function Phone(brand, price, discount) {
//     this.brand = brand;
//     this.price = price;
//     this.discount = discount;
// }
// Phone.prototype.showInfo = function () {
//     console.log(this.brand, this.price, this.discount);
// };

// Phone.prototype.getDiscountPrice = function () {
//     const price = (this.price * (100 - this.discount)) / 100;
//     console.log(price);
// };

// const samsungPhone = new Phone('Samsung', 600, 10);
// const applePhone = new Phone('Apple', 1300, 5);

// console.log(samsungPhone);
// console.log(applePhone);

// function Laptop (brand, price, discount, cover) {
//     Phone.apply(this, arguments);
//     this.cover = cover;
// }
// const samsungLaptop = new Laptop('Samsung', 1200, 10, 'broun');
// const appleLaptop = new Laptop('Apple', 2600, 5, 'gruy');
// console.log(samsungLaptop);
// console.log(appleLaptop);
// !=========== ES6 =================================
// class Phone {
//     constructor(brand, price, discount) {
//         this.brand = brand;
//         this.price = price;
//         this.discount = discount;
//     }
//     showInfo() {
//         console.log(this.brand, this.price, this.discount);
//     }
//     getDiscountPrice() {
//         const price = (this.price * (100 - this.discount)) / 100;
//         console.log(price);
//     }
// }

// class Laptop extends Phone {
//     constructor(cover, ...rest) {
//         super(...rest)
//         this.cover = cover;
//     }
// }

// const samsungPhone = new Phone('Samsung', 600, 10);
// const applePhone = new Phone('Apple', 1300, 5);

// console.log(samsungPhone);
// console.log(applePhone);

// const samsungLaptop = new Laptop('Samsung', 1200, 10, 'broun')
// const appleLaptop = new Laptop('Apple', 2600, 5, 'gruy');
// console.log(samsungLaptop);
// console.log(appleLaptop);

// !====== Public class fields / Поля публічного класу================
// class Phone {
//     constructor(brand, price, discount) {
//         this.brand = brand;
//         this.price = price;
//         this.discount = discount;
//     }
// Класичний метод класа
// showInfo() {
//     console.log(this.brand, this.price, this.discount);
// }
// getDiscountPrice() {
//     const price = (this.price * (100 - this.discount)) / 100;
//     console.log(price);
// }

// todo По іншому запис класу.
//     numbers = [1, 2, 3, 4, 5];
//     pizza = 'Carbonara';
// ? Публічні поля, не втрачають сонтукст===============
//     showInfo = () => {
//         console.log(this.brand, this.price, this.discount);
//     };
// ?====================================================
//     getDiscountPrice() {
//         const price = (this.price * (100 - this.discount)) / 100;
//         console.log(price);
//     }
// }

// const samsungPhone = new Phone('Samsung', 600, 10);
// const applePhone = new Phone('Apple', 1300, 5);
// console.log(samsungPhone);
// console.log(applePhone);

// !====== Static class fields / Поля публічного класу================
// class Calculator {
//     static Pi = 3.14;

//     static min = (a, b) => {
//         return a < b ? a : b;
//     };

//     static sum = (a, b) => {
//         return a + b;
//     };
// }

// console.log(Calculator.Pi);
// console.log(Calculator.min(5, 7));
// console.log(Calculator.sum(6, 17));
// !====================================================================

// ! =============== Shop Class ===================================

class Shop {
    constructor(name, items) {
        this.name = name;
        this.items = items;
    }

    showItem() {
        // const item = this.items.map(item => item);
        // console.log(
        //     `id: ${item.id}, name: ${item.name}, price: ${item.price}, qty: ${item.qty}`);
        // console.log(item);
        for (const item of this.items) {
            console.log(
                `id: ${item.id}, name: ${item.name}, price: ${item.price}, qty: ${item.qty}`,
            );
        }
    }

    addItem({ name, price, qty, category }) {
        this.items = [
            ...this.items,
            {
                id: this.generateID(),
                name,
                price,
                qty,
                category,
            },
        ];
        
    }

    updateItem(productName, newName) {
        for (const item of this.items) {
            {
                if (item.name === productName) {
                    item.name = newName;
                }
            }
        }
    }

    removeItem(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                let idx = this.items.indexOf(item);
                this.items.splice(idx, 1);
            }
        }
    }

    generateID() {
        return Math.random().toString().slice(2);
    }
}

let items = [
    { id: '1', name: 'bananes', price: 25, qty: 150, category: 'fruits' },
    { id: '2', name: 'apples', price: 18, qty: 450, category: 'fruits' },
    { id: '3', name: 'potatoes', price: 10, qty: 850, category: 'vagetables' },
    { id: '4', name: 'tomatoes', price: 35, qty: 378, category: 'vagetables' },
];

const ATB = new Shop('ATB', items);

const pear = {
    name: 'pear',
    price: 18,
    qty: 450,
    category: 'fruits',
};
// const { id, name, price, qty, category } = pear;


ATB.addItem(pear);

ATB.showItem();