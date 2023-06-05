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
В функции я написал цикл for-in, который будет итерировать ключи (перебирать каждый ключ) объекта.
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
Внутри функции мы создаём объект setObj, затем удаляем у объекта метод `__proto__`. Выводим результат в консоль. 
```
function obj(){
    const setObj = new Set();
    setObj.delete(__proto__);
    console.log(setObj);
}
```

# Exercise 4
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

## function creating
В самом начале мы создали функцию, которая в виде параметра имеет начальное число и конечное число.
```
function numbers(start, end){
}
```

## interval creating
Внутри функции мы создали переменную nowNumber которая будет иметь число start, затем создали функцию с интервалом в 1 секунду.
```
function numbers(start, end){
    let nowNumber = start; // add new variable for now number
    // add a intervalId where we can see a setInterval function
    const intervalId = setInterval(()=> {
    }, 1000 ) // repeat every 1000 ms (1 second)
}
```

## number checking
Внутри интервала будет выводиться число, затем будет проверяться на равность конечного и начального числа, если равны то интервал завершается, в противном случае будет проверяться число в функции, если start больше end числа то nowNumber в интервале будет отниматься на 1, если start меньше чем end число то nowNumber будет прибавляться на 1. Также само собой будем вызывать функцию с аргументами.
```
function numbers(start, end){
    let nowNumber = start; // add new variable for now number
    // add a intervalId where we can see a setInterval function
    const intervalId = setInterval(()=> {
         console.log(nowNumber)
        // if now number === end number we will end the interval
        if (nowNumber === end){
            clearInterval(intervalId)
        }
        // function what check the number is positive or negative
        function numCheck(){
            if (start > end){
                nowNumber--; // after console.log we will plus + 1 for number
            } else{
                nowNumber++; // after console.log we will minus - 1 for number
            }
        } numCheck();
    }, 1000 ) // repeat every 1000 ms (1 second)
}

numbers(-22,-24);
```


# Exercise 5
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.

## function creating
В самом начале создали стрелочную функцию, которая по тз. должна в виде параметров принимать x и n числа.
```
const degree = (x,n) => {
}
```

## number checking
В функции будет проверять число на позитивность. Если все x и n числа больше или равны 1 то выводится ответ: x в степени n;, в крайнем случае будет выводиться ошибка.
```
const degree = (x,n) => {
    if (x >= 1 && n >= 1){
        console.log(x**n)
    } else{
        console.log('\nError! The number is not a natural\n');
    }
}
```

## functiom calling

Вызываем функцию с определенными аргументами.
```
const degree = (x,n) => {
    if (x >= 1 && n >= 1){
        console.log(x**n)
    } else{
        console.log('\nError! The number is not a natural\n');
    }
}

degree(2,2); // 4
degree(4,2); // 16
degree(0,10); // Error! The number is not a simple
degree(5,5); // 3125
```



# Conclusion - Заключение
Это был мой первый опыт с readme.md, дальше я постараюсь научиться делать документацию получше. Если по поводу функций в js, то я понял.
Я считаю, что в отличии от прошлой работы с массивами (которую я переделал после оценивания ментора) в функциях я разобрался намного быстрее, возможно это связано с тем, что они полегче, но я так не считаю, скорее всего в заданиях с массивами я был менее внимателен.
Спасибо за внимание!
