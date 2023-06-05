/* Переписать консольное приложение из предыдущего задания на классы. */

class Device {
    constructor(name,price,color,powerOnPrice) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.powerOnPrice = powerOnPrice;
        this.poweredOn = false;
    }

    turnOn() {
        if(this.poweredOn === true){
            console.log(`${this.name} is already turn on`);
        } else{
            console.log(`${this.name} is turn on`);
            this.poweredOn = true;
        }
    }
    
    turnOff() {
        if(this.poweredOn === false){
            console.log(`${this.name} is already turn off`);
        } else{
            console.log(`${this.name} is turn off`);
            this.poweredOn = false;
        }
    }
}

// devices
const lamp = new Device('Lamp', 50, 'white', 300);
const pc = new Device('PC', 200, 'black', 500);

// power on summary
const powerOnPriceSum = lamp.powerOnPrice + pc.powerOnPrice;
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