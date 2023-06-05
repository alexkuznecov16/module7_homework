# module7_homework
# Exercise 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

## function making
В самом начале я создал функцию, которая в качестве параметра принимает объект.
```
function getObj(obj){
    // code
};
```

## object iteration
В функции я написал цикл __for-in__, который будет итерировать ключи (перебирать каждый ключ) объекта.
```
function getObj(obj){
    for(let key in obj){
    }
};
```

## hasOwnProperty, object making and function calling
После итерации мы будем проверять свойства объекта на собственность, если есть то выводится ключ и значение.
```
function getObj(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key) === true){
            console.log(`${key} : ${obj[key]}`)
        }
    }
};

const myObject = {
    name: 'Alex',
    age: '24',
};

getObj(myObject);
// name : Alex
// age : 24
```


# Exercise 2
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

## function making and text checking
Создаём функцию в которой параметрами будут являться текст и объект. В функции будет выводиться boolean значение в зависимости есть ли текст в каком-либо имени объекта.
```
function check(text, obj){
    console.log(text in obj) // return text in obj
}
```

## object making and function calling
Создаём объект, который будет передаваться в функцию, а также вызываем функцию.
```
function check(text, obj){
    console.log(text in obj) // return text in obj
}

const myObject = {
    name: 'Alex',
    age: '24',
};

check('age', myObject) // true
check('hello', myObject) // false
check('name', myObject) // true
```


# Exercise 3
Написать функцию, которая создает пустой объект, но без прототипа.

## function making
Создаём функцию в которой будем создавать объект.
```
function obj(){
    // code
}
```

## object making
Внутри функции мы создаём объект setObj, затем удаляем у объекта метод __proto__. Выводим результат в консоль.
```
function obj(){
    const setObj = new Set();
    setObj.delete(__proto__);
    console.log(setObj);
}
```

# Exercise  4
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

## Device object making
В объекте __Device__ в качестве параметров мы будем принимать имя, цену, цвет, а также цену за включённый прибор. С помощью `this` мы определяем свойства объекта __Device__, при создании нового экземпляра (девайса). `This` указывает на текущий экземпляр объекта.
```
function Device(name, price, color, powerOnPrice){
    this.name = name; // device name
    this.price = price; // device price
    this.color = color; // device color
    this.powerOnPrice = powerOnPrice; // device power number
    this.poweredOn = false; // device is on? = false
}
```

## turn on and turn off functions making
Тут есть 2 функции, которые выключают и включают прибор, если прибор был уже включен или выключен, то выводится текст, что действие уже было выполнено.
```
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
```

## Vars creating, find powerOn sum and functions turn on + turn of checking
Здесь мы создаём экземпляры (приборы) и передаём аргументы, затем находим цену за мощность включенных приборов. В самом конце программы мы проверяем функции выключения и включения приборов.
```
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
```


# Exercise  5
Переписать консольное приложение из предыдущего задания на классы.

## class and turnOn - turnOff functions
Создаём класс с именем __Device__ и в самом начале по синтаксису передаем параметры в конструктор. Затем создаём функции выключения и включения приборов.
```
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
```

## Vars creating, find powerOn sum and functions turn on + turn of checking
Создаём новые экземпляры (приборы) для класса __Device__. Затем высчитываем цену за 2 включенных прибора и проверяем класс __Device__ на работоспособность.
```
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
```

## Conclusion
В заключении могу сказать, что понял смысл ООП в программировании, также получил опыт работы с классами, прототипами, объектами. Эта тема была самая трудная по моему мнению, потому что после пройденного материала я так и не понимал зачем прототипы, но посмотрев дополнительные видео на YouTube до меня дошло и начал писать сам.
__Спасибо за внимание!__