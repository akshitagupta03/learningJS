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
