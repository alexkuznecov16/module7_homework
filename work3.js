/* Написать функцию, которая создает пустой объект, но без прототипа. */

function obj(){
    const setObj = new Set();
    setObj.delete(__proto__);
    console.log(setObj);
}

obj(); // Set(0) {}