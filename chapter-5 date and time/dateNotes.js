/* 
JavaScript Date objects represent a single moment in time on a platform independent format
date objects contain a number that represents milliseconds since 1 January, 1970 UTC

there are 4 ways to create a new date object

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
// it takes 7 arguments
new Date(milliseconds)
// we cannot avoid month section
new Date(date string)

new Date()
date objects are created with the new Date() constructor 
*/


/* 
let currDate = new Date();
console.log(currDate);

console.log(new Date());
console.log(new Date().toLocaleString()); // displays our current date and time
console.log(new Date().toString()); // current date time in string

Date.now()
returns the numeric value corresponding to the current time - 
the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
console.log(Date.now());

javascript counts months from 0 to 11
january is 0 and december is 11

var d = new Date(2023, 4, 31, 18, 42, 11, 14);
console.log(d.toLocaleString());

new Date(dateString)
var d = new Date("June 1, 2023 20:41:00");
console.log(d);
console.log(d.toLocaleString()); 
*/
