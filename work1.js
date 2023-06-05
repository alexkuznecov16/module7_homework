/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение. */
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