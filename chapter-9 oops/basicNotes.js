/*

What is Object Literal?

simply a key:value pair data structure
storing variables and functions together in one container are objects

*/



/*

Creating an object:


// 1st way

let bioData = {
    myName : "Akshita Gupta",
    myAge : 19,
    getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}
bioData.getData();


// 2nd way

let bioData = {
    myName : "Akshita Gupta",
    myAge : 19,
    getData(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}
bioData.getData();


// 3rd way
// if we want object as a value inside an object

let bioData = {
    myName : {
        firstName : "Akshita",
        lastName : "Gupta" 
    },
    myAge : 19,
    getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}
console.log(bioData.myName.lastName);

*/
