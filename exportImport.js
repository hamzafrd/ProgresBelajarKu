const { coffeeStock, isCoffeeMachineReady } = require('./state');

const makeCoffee = (type, miligrams, machine) => {
    if (coffeeStock[type] >= miligrams) {
        if (isCoffeeMachineReady != machine) {
            console.log('mesin blm siap!')
        } else {
            console.log("Kopi berhasil dibuat!");
        }
    } else {
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta", 80, false);

///////////////// state.js
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}
const isCoffeeMachineReady = true;

// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;


module.exports = { coffeeStock, isCoffeeMachineReady }; 
// console.log(module)
