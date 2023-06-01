// // // basic javascript


// // // to print anything
// // console.log(5+20);
// // console.log('hello world');



// // // variables
// // var myAge = 19;
// // let myName = 'Akshita';
// // const mySurname = 'Gupta';
// // // let can be redefined in the code later whereas const cannot



// // // data types
// // // undefined : typeof instance === "undefined"
// // // Boolean : typeof instance === "boolean"
// // // Number : typeof instance === "number"
// // // String : typeof instance === "string"
// // // BigInt : typeof instance === "bigint"
// // // Symbol : typeof instance === "symbol"



// // // typeof operator
// // // console.log(typeof(variableName));
// // console.log(typeof(myName));



// // // difference between null and undefined

// // var variableName = null;
// // console.log(variableName); // prints null
// // // null value is assigned to the variable

// // var iAmStandBy;
// // console.log(iAmStandBy); // prints undefined
// // // no value is assigned to the variable, hence it is undefined

// // // data type of null is object
// // // data type of undefined is undefined 
// // // this is a bug in javascript



// // // what is NaN (not a number)
// // console.log(isNaN(myName));
// // console.log(isNaN(myName)); // returns true
// // if(isNaN(myName)){
// //     console.log('please enter valid phone number');
// // }



// // // NaN is a property of a global object, its not a data type
// // NaN === NaN; //returns false
// // Number.NaN === NaN; // returns false
// // isNaN(NaN); // returns true
// // isNaN(Number.NaN); // returns true
// // Number.isNaN(NaN); // true



// // // expressions and operators

// // 5 + 20; // 5 and 20 are the operands, + is the operator
// // // this whole thing is an expression

// // // assignment operator
// // var x = 5;

// // // arithmetic operator
// // console.log(3+3);
// // console.log(3**3); // 3 to the power 3, returns 27

// // // increment decrement operators

// // // postfix operator
// // var num = 15;
// // var newNum = num++;
// // console.log(num); // prints 16
// // console.log(newNum); // prints 15

// // // prefix operator
// // var num = 15;
// // var newNum = ++num;
// // console.log(num); // prints 16
// // console.log(newNum); // prints 16

// // // comparison operator
// // var a = 30;
// // var b = 10;
// // console.log(a == b); // returns false 

// // // logical operator

// // // logical  AND (&&)
// // // logical OR (||)
// // // logical NOT (!)

// // // string operator

// // // concatenation operator
// // console.log("hello " + "world"); // returns hello world
// // console.log(myName + " Gupta"); 

// // // conditional (ternary) operator
// // // variableName = (condition) ? value1 : value2
// // var age = 17;
// // console.log((age >= 18) ? "you can vote" : "you cannot vote");

// // // swap two numbers
// // var a = 10;
// // var b = 20;
// // var c = a;
// // a = b;
// // b = c;
// // console.log("The value of a is " + a);
// // console.log("The value of b is " + b);

// // // swap two numbers without using third variable
// // var a = 5;
// // var b = 10;
// // a = a+b; // a = 15
// // b = a-b; // b = 5
// // a = a-b; // a = 10
// // console.log("The value of a is " + a);
// // console.log("The value of b is " + b);

// // // difference between  == and ===
// // var num1 = 5;
// // var num2 = '5';

// // console.log(num1 == num2); // returns true
// // console.log(num1 === num2); // returns false



// // // loops

// // // if-else
// // var tomr = 'rain';
// // if(tomr == 'rain'){
// //     console.log('Take a raincoat');
// // }
// // else{
// //     console.log('No need to take a raincoat');
// // }



// // // what are falsy values
// // // there are 5 falsy values in javascript
// // // 0, "", undefined, null, NaN, false

// // if(score=0){
// //     console.log("Omg, we lost the game");
// // }
// // else{
// //     console.log("Yay, we won the game");
// // }
// // // always returns yay, we won the game as score=0 is a falsy value



// // // functions

// // function sum(){
// //     var a=10, b=20;
// //     var total = a+b;
// //     console.log(total);
// // }
// // sum();

// // // anonymous function
// // // putting a function into a variable
// // var funExp = function(a, b){
// //     return total=a+b;
// // }
// // console.log(funExp(5, 15));


// // // var vs let vs const
// // // var => function scope
// // // let and const => block scope



// // // ECMAScript 2015 (ES6)

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



// // arrays

// // var myFriends = ["megha", "parth", "kanishka"];
// // console.log(myFriends[2]); // returns kanishka

// // for(let elements of myFriends){
// //     console.log(elements);
// // }

// // myFriends.forEach(function (element, index, array){
// //     console.log(element + " index : " + index + " " + array);
// // })

// // // fat arrow function
// // myFriends.forEach((element, index, array) => {
// //     console.log(element + " index : " + index + " " + array);
// // })


// // searching and filter in an array
// // var myFriends = ["megha", "parth", "kanishka"];
// // console.log(myFriends.indexOf("parth", 2)); // starts from index 2
// // console.log(myFriends.lastIndexOf("megha"));
// // console.log(myFriends.includes("megha")); // returns boolean value

// // // find method in array
// const prices = [200, 300, 350, 400, 450, 500, 600];

// // price < 400 // condition

// // const findElem = prices.find( (currVal) => {
// //     return currVal < 400;
// // });
// // console.log(findElem);

// // using fat arrow function
// // const findElem = prices.find( (currVal) => currVal < 400);
// // console.log(findElem);


// // findIndex() method
// console.log( prices.findIndex( (currVal) => currVal > 1400) ); // returns -1 as not found

// // filter() method
// // returns a new array containing all elements of the calling array
// // for which the provided filtering function returns true

// const prices = [200, 300, 350, 400, 450, 500, 600];
// price < 400
// const newPriceTag = prices.filter( (elem, index) => {
//     return elem > 1400;
// })
// console.log(newPriceTag); // returns empty array

// sort() method
// converts elements into string and then compares
// const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov'];
// console.log(months.sort()); // sorts alphabetically

// const arr = [1, 30, 4, 21, 100000, 99];
// console.log(arr.sort());
// // "25" is bigger than "100" as "2" is bigger than "1"

// push() method
// returns the new length of the array
// const animals = ["pigs", "goats", "sheep"];
// const count = animals.push("chicken");
// console.log(animals);
// console.log(count); // gives number of elements

// unshift() method
// const animals = ["pigs", "goats", "sheep"];
// const count = animals.unshift("chicken");
// console.log(animals); // inserts chicken at start
// console.log(count); // gives number of elements

// pop() method
// returns the last element of the array that is removed

// shift() method
// removes first element from the array and returns the removed element


// splice() method
// add, insert delete all in one
// returns the array of elements we delete
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// // adding Dec at end
// const newMonth = months.splice(months.length(), 0, "Dec"); 
// console.log(months);

// update march to March
// 2nd argument in splice is number of elements we want to delete
// const indexOfMonth = months.indexOf('march');
// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth, 1, "March");
// }
// else{
//     console.log("No such data found");
// }
// console.log(months);

// map() method
// let newArray = arr.map(callback(currentValue[, index[, array]]){
    // return element for newArray, after executing something
// }[thisArg]);

// returns a new array containing the results of calling a function on every element in this array
// const array1 = [1, 4, 9, 16, 25];
// // num>9

// // let newArr = array1.map((currElem, index, arr) => {
// //     return currElem > 9;
// // })
// // console.log(array1);
// // console.log(newArr);

// let newArr = array1.map((currElem, index, arr) => {
//     return `Index no = ${index} and the value is ${currElem} belong to ${arr}`;
// })
// console.log(newArr);
// // map() method returns new aray without mutating the original array

// let newArrfor = array1.forEach((currElem, index, arr) => {
//     return `Index no = ${index} and the value is ${currElem} belong to ${arr}`;
// })
// console.log(newArrfor);
// // forEach() method returns undefined 


// find square root of each element in array
// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map((currElem) => {
//     return Math.sqrt(currElem);
// })
// console.log(arrSqr);

// multiply each element by 2 and return only those elements 
// whose value is greater than 10
// chaining used (we can use chaining in map method)
// let arr = [2, 3, 4, 6, 8];
// let arr2 = arr.map((currElem) => {
//     return currElem*2;
// }).filter((currElem) => {
//     return currElem>10;
// })
// console.log(arr2);

// reduce() method
// flatten an array means to convert 3d or 2d array to 1d array
// reduce() method executes a reducer function (that you provide) on
// each element of the array, resulting in single output value
// takes 4 arguments : accumulator, curr value, curr index, source array
// to find sum of elements left in previous question (12, 16)

// let arr = [5, 6, 2];

// let sum = arr.reduce((accumulator, currElem, index, arr) => {
//     return accumulator += currElem;
// }, 7) // 7 is the initial value provided
// console.log(sum);

// flatten array
// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8']
// ];

// let flatArr = arr.reduce((accum, currVal) => {
//     return accum.concat(currVal);
// })
// console.log(flatArr);



// strings in JavaScript

// strings can be created as primitives, from string literals, or as objects using the String() constructor
// let myName = "akshita gupta";
// let myChannelName = 'akshita gupta';

// // do not use this
// // let ytName = new String("Thapa Technical");

// console.log(myName);
// console.log((ytName));

// methods in string

// how to find length of string
// string.prototype.length
// reflects the length of the string

// let myName = 'Akshita Gupta';
// console.log(myName.length); // space is counted too

// // escape character
// // to use if we want quotes on a word in a string as well
// let anySentence = "we are the so called \"Vikings\" from the north.";
// console.log(anySentence);

// // if you don't want any mess, simply use alternate quotes
// let anySentence = "we are the so called 'Vikings' from the north.";

// string.prototype.indexOf(searchValue [, from Index])
// returns the index of the first occurence of a specified text in a string

// const myBioData = 'I am the Thapa technical';
// console.log(myBioData.indexOf("thapa")); // counts space as well

// string.prototype.lastIndexOf(searchValue [, from Index])
// returns the index within the calling string object of the last occurence of searchValue, or -1 if not found

// const myBioData = 'I am the thapa technical';
// console.log(myBioData.lastIndexOf("t", 6)); // counts space as well

// searching for a string in a string
// string.prototype.search(regexp)
// the search() method searches a string for a specified value and returns the position of the match
// const myBioData = 'I am the thapa technical';
// let sData = myBioData.search("thapa");
// console.log(sData);


// extracting string parts
// slice(start, end)
// substring(start, end)
// substr(start, length)

// slice() extracts a part of a string and returns it in a new string
// end position not compulsory
// slice() selects the elements starting at the given start argument, and ends at, but does not include the given end argument
// the original array does not change

// var str = "Apple, Banana, Kiwi";
// let res = str.slice(7, -2);
// console.log(res);

// substring() is similar to slice()
// the difference is that substring() does not accept negative indexes
// and second parameter specifies the length of the extracted part
// var str = "Apple, Banana, Kiwi";
// let res = str.substring(0, 4);
// console.log(res);

// to display characters from the last
// var str = "Apple, Banana, Kiwi";
// let res = str.substr(-4);
// console.log(res);

// replacing string content
// string.prototype.replace(searchFor, replaceWith)
// the replace method replaces a specified value with another value in a string
// let myBioData = `I am akshita gupta akshita`;
// let replaceData = myBioData.replace('akshita', 'Akshita');
// console.log(replaceData); // only replaces first akshita
// console.log(myBioData); // does not replace original data 

// extracting string characters

// charAt() method returns the character at a specified index in a string
// let str = "HELLO WORLD";
// console.log(str.charAt(0));

// charCodeAt()
// charCodeAt() method returns the unicode of the character at a specified index in a string
// method returns a UTF-16 code (an integer between 0 and 65535)
// let str = "HELLO WORLD";
// console.log(str.charCodeAt(0));


// ECMAScript 5 (2009) allows property access [] on strings
// var str = "HELLO WORLD";
// console.log(str[1]);

// toUpperCase()
// toLowerCase()

// concat() nethod
// joins two or more strings

// let fName = "Akshita";
// let lName = "Gupta";

// console.log(fName + lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));

// trim() method
// removes whitespace from both sides of a string
// does not remove space from in between

// converting string to array
// split() method

// var txt = "a, b, c, d, e"; // string
// console.log(txt.split(",")); // split on commas
// console.log(txt.split(" ")); // split on spaces
// console.log(txt.split("|")); // split on commas




// date and time in JavaScript

// JavaScript Date objects represent a single moment in time on a platform independent format
// date objects contain a number that represents milliseconds since 1 January, 1970 UTC

// there are 4 ways to create a new date object

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section
// new Date(date string)

// new Date()
// date objects are created with the new Date() constructor

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString()); // displays our current date and time
// console.log(new Date().toString()); // current date time in string

// Date.now()
// returns the numeric value corresponding to the current time - 
// the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
// console.log(Date.now());

// javascript counts months from 0 to 11
// january is 0 and december is 11

// var d = new Date(2023, 4, 31, 18, 42, 11, 14);
// console.log(d.toLocaleString());

// new Date(dateString)
// var d = new Date("June 1, 2023 20:41:00");
// console.log(d);
// console.log(d.toLocaleString());


// dates method

// const curDate = new Date();

// how to get individual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// how to set individual date
// console.log(curDate.setFullYear(2023));
// the setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2023, 5, 1));
// console.log(curDate.setMonth(5));
// console.log(curDate.setDate(1));
// console.log(curDate.toLocaleString());


// time methods

// const curTime = new Date();

// how to get individul time
// console.log(curTime.getTime());
// getTime() returns number of milliseconds since January 1, 1970
// console.log(curTime.getHours());
// returns the hours of a date as a number(0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// how to set individual time
// let curTime = new Date();

// // console.log(curTime.setTime());
// console.log(curTime.setHours(20));
// console.log(curTime.setMinutes(56));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(231));

// to get time
new Date().toLocaleTimeString();
// to get date
new Date().toLocaleDateString();
// to get both
new Date().toLocaleString();



// math objects in javascript
// allows to perform mathematical tasks on numbers

// console.log(Math.PI);

// Math.round()
// returns value of x rounded to its nearest integer
// let num = 10.2565;
// console.log(Math.round(num));

// Math.pow()
// console.log(Math.pow(2, 3));

// Math.sqrt()
// console.log(Math.sqrt(25));

// Math.abs()
// console.log(Math.abs(-55));

// Math.ceil()
// Math.floor()
// Math.min()
// Math.max()

// Math.random()
// returns a random number between 0 (inclusive), and 1 (exclusive)

// Math.trunc()
// returns integer part of a number
