/*

Hoisting in JavaScript

we have a creation phase and an execution phase
hoisting in javascript is a mechanism where variables and function
declarations are moved to the top of their scope before the code executes

console.log(myName);
var myName;
myName = "Akshita";

// how it will be in output during creation phase
var myName;
console.log(myName);
myName = "Akshita";

hoisting is avoided by using let keyword instead of var 

*/



/* 

What is Scope Chain and Lexical Scoping in JS?

Scope chain is used to resolve the value of variable names
Scope chain is lexically defined
it means that we can see what the scope chain will be looking at the code

lexical scoping means now, the inner functions can get access to 
their parent function variables but vice versa is not true


// For Example 👇

let a = "Hello guys."; // global scope

const first= () => {
    let b = " How are you?"
 
    const second = () => {
      let c = " Hii, I am fine thank you";
      console.log(a+b+c);
    }
    second();
    console.log(a+b+c); //I can't use C 
}
first();

*/



/*

What is Closures in JavaScript?

A closure gives us access to an outer function’s scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.

// For Example

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
      let sum = a+b;
      console.log(`the sum of the two no is ${sum}`);
    }
    innerFun();
}
outerFun(5);

// One more Example 

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
    let sum = a+b;
    console.log(`the sum of the two no is ${sum}`);
  }
  return innerFun;
}
let checkClousure = outerFun(5);
console.dir(checkClousure);

"use strict"

let x = "vinod";
console.log(x);

*/



/* 

Synchronous JavaScript Prog 

const fun2 = () => {
    console.log(`Function 2️ is called`);
}

const fun1 = () => {
    console.log(`Function 1 is called`);
    fun2();
    console.log(`Function 1 is called again`);
}
fun1(); 

*/



/* 

Asynchronous JavaScript Prog 

const fun2 = () => {
    setTimeout(()=> {
        console.log(`Function 2️ is called`);
    }, 2000);
}

const fun1 = () => {
    console.log(`Function 1 is called`);
    fun2();
    console.log(`Function 1 is called again`);
}
fun1();

*/
