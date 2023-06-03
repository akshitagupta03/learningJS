// how to find length of string
// string.prototype.length
// reflects the length of the string

// let myName = 'Akshita Gupta';
// console.log(myName.length); // space is counted too

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
