// // // template literals (template strings)
// // // javascript program to print table for given number

// // for(let num=1; num<=10; num++){
// //     let tableOf = 12;
// //     // console.log(tableOf + " * " + num + " = ");
// //     console.log( ` ${tableOf} * ${num} = ${tableOf * num} ` );
// // }


// // // default parameters
// // function mult(a, b){
// //     return a*b;
// // }
// // console.log(mult(5, 2)); // returns 10
// // console.log(mult(5)); // returns NaN

// // function mult(a, b=5){
// //     return a*b;
// // }
// // console.log(mult(3)); // returns 15

// // // normal function
// // function sum(){
// //     let a=5, b=6;
// //     let sum = a+b;
// //     return `the sum of the two numbers is ${sum}`;
// // }
// // console.log(sum());

// // // arrow function
// // const sum = () => {
// //     let a=5, b=6;
// //     let sum = a+b;
// //     return `the sum of the two numbers is ${sum}`;
// // }
// // console.log(sum());

// // const sum = () => {
// //     let a=5, b=6;
// //     return `the sum of the two numbers is ${a+b}`;
// // }
// // console.log(sum());

// // const sum = () => {
// //     let a=5, b=6;
// //     return `the sum of the two numbers is ${(a=5) + (b=6)}`;
// // }
// // console.log(sum());

// // fat arrow function // does not support "this"
// // const sum = () => `the sum of the two numbers is ${(a=5)+(b=6)}`;
// // console.log(sum());
