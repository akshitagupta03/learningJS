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
