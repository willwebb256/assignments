//1a: Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type number:

// let x = 4
// let y = 5

// function sum(x,y){
//     if(isNaN(x)){
//         throw new Error("X is Not a Number!");
//     } else if(isNaN(y)){
//         throw new Error("Y is Not a Number!");
//     } return x + y
//     }
    
     

// console.log(sum(x, y))

// 1b: Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.


let x = 10
let y = 5

try{
function sum(x,y){
    if(isNaN(x)){
        throw new Error("X is Not a Number!");
    } else if(isNaN(y)){
        throw new Error("Y is Not a Number!");
    } return x + y
    }
    }

    catch(err){
        console.log(err)
    }

console.log(sum(x, y))

// 2a: 