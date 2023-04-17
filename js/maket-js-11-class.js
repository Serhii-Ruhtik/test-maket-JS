class Car {
    static description = 'Класс описуючий автомобіль';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    #test = 'test'; //приватне значення.

    constructor({ brand, model, price } = {}) {
        // console.log('виконується конструктор');
        // console.dir(this);
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }

    get modelCar() {
        return this.model;
    }
    set modelCar(newModal) {
        this.model = newModal;
    }

    // getModel(){
    //     return this.model;
    // }

    // setModel(newModel) {
    //     this.model = newModel;
    // }
}

// console.log(Car.description);
const carInstance = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

console.log(carInstance);

console.log(carInstance.modelCar); //todo //читається функція.
carInstance.modelCar = 'Q7'; //todo //записується у функцію.
console.log(carInstance.modelCar); //todo // читається функція змінене значеннняю
// console.log(carInstance.getModel());//* спростився інтерфейс.
// carInstance.setModel('Q7'); //* тут ми викликали метод.
// console.log(carInstance.getModel());
