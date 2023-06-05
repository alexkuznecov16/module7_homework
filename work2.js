/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

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