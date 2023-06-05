/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает. */

function Device(name, price, color, powerOnPrice){
    this.name = name; // device name
    this.price = price; // device price
    this.color = color; // device color
    this.powerOnPrice = powerOnPrice; // device power number
    this.poweredOn = false; // device is on? = false
}

// turn on function area
Device.prototype.turnOn = function (){
    if(this.poweredOn === true){
        console.log(`${this.name} is already turn on.`)
    } else{
        console.log(`${this.name} is turn on.`)
        this.poweredOn = true;
    }
}

// turn off function area
Device.prototype.turnOff = function (){
    if(this.poweredOn === false){
        console.log(`${this.name} is already turn off.`);
    } else{
        console.log(`${this.name} is turn off.`);
        this.poweredOn = false;
    }
}

// devices
const lamp = new Device('Lamp', 50, 'white', 300);
const pc = new Device('PC', 200, 'black', 500);

// console.log(pc); // Device { name: 'PC', price: 200, color: 'black', powerOnPrice: 500, poweredOn: false }
// console.log(lamp); // Device { name: 'Lamp', price: 50, color: 'white', powerOnPrice: 300, poweredOn: false }

// power on summary
const powerOnPriceSum = lamp.powerOnPrice + pc.powerOnPrice; // 300 + 500
console.log(`Power on sum = ${powerOnPriceSum}`); // Power on sum = 800

// lamp area
lamp.turnOn(); // Lamp is turn on.
lamp.turnOn(); // Lamp is already turn on.
lamp.turnOff(); // Lamp is turn off.
lamp.turnOff(); // Lamp is already turn off.

// pc area
pc.turnOn(); // PC is turn on. 
pc.turnOn(); // PC is already turn on.
pc.turnOff(); // PC is turn off.
pc.turnOff(); // PC is already turn off.