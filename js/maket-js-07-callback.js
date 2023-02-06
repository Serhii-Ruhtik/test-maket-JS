// const callback = function () {
//     console.log("Через 2 секунди  в середені колбека таймфута")
// };

// console.log("код перед таймінгом");

// setTimeout(callback, 2000);

// console.log("код після таймінгом");
// * Функцыя фыльтрація масива ===================
const array = [1, 2, 3, 4, 5,]

const fil = function (array, test){
    //console.log(fil);

    const newArray = [];

    // array.forEach(element => {
    //     console.log(element);
    // });

    for (const element of array) {
        console.log(element);
        console.log(test(element));
        
        const passed = test(element);

        if (passed) {
            newArray.push(element);
        }

    }
    return newArray;
};

const a = function(velue){
    return velue >=3;
};

const b = function(velue){
    return velue <= 3;
}


console.log(fil(array, a));
console.log(fil(array, b));
