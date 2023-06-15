// higher order functions

/* 
passing a function as an argument in another function
is called higher order function

the function which gets passed as an argument is called 
a callback function 
*/

const add = (a, b) => {
    return a+b;
}

const subs = (a, b) => {
    return Math.abs(a-b);
}

const mult = (a, b) => {
    return a*b;
}

const calculator = (num1, num2, operator) => {
    return operator(num1, num2);
}
console.log(calculator(5, 2, add));
