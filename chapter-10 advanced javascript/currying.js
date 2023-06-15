/*

Currying is a technique of evaluating function with multiple
arguments, into a sequence of function with single argument.

A function, instead of taking all arguments at once, takes the 
first one and returns a new function that takes the second one and 
returns a new function which takes the third one, and so on
until all the arguments have been fulfilled.


function sum(num1){
    // console.log(num1);
    return function(num2){       // anonymous function
        // console.log(num1, num2);
        return function(num3){       // anonymous function
            console.log(num1 + num2 + num3);
        }
    }
}


// another way to write this using fat arrow function

const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
sum(5)(3)(8);

*/
