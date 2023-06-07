/* Написать функцию, которая создает пустой объект, но без прототипа. */

(function obj(){
    let newObj = Object.create(null);
    newObj.prototype = null
    console.log(newObj);
})()