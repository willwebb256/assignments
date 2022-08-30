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


// let x = 10
// let y = 5

// try{
// function sum(x,y){
//     if(isNaN(x)){
//         throw new Error("X is Not a Number!");
//     } else if(isNaN(y)){
//         throw new Error("Y is Not a Number!");
//     } return x + y
//     }
//     }

//     catch(err){
//         console.log(err)
//     }

// console.log(sum(x, y))

// 2a: Given a user object, write a function called login that takes a username and password
// as parameters. Throw an error if either of them don't match. Otherwise, log to the 
// console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};

try{
function login(username, password){
  //check credentials
  if( user.username === "sam" && user.password === "123abc"){
        return "Login Successful!"
  } else throw new Error ("Incorrect Login")
}}
catch(err){
    console.log(err)
}

console.log(login(user))

