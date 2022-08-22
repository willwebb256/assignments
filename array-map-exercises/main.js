// Higher Order Functions
// callback is a function passed into another function
 
// function doMath(num1, num2, callback){
//     return callback(num1, num2)
//  }
  
  
//  function sum(num1, num2){
//     return num1 + num2
//  }
  
//  function subtract(num1, num2){
//     return num1 - num2
//  }
  
  
//  console.log(doMath(5, 10, subtract))
 
 // Higher order array methods
 // .map()
  
 // const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  
 // const result = arr.map(function(num){ // arr[i]
 //     return num + 10
 // })
 
 //1. Make an array of numbers that are doubles of the first array

// const arr = [2, 5, 100];

//  const doubleNumbers = arr.map(function(arr){
//     return arr * 2
//   })
  
//   console.log(doubleNumbers)

// 2. Take an array of numbers and make them strings

// const stringify = arr.map(function(arr){
//         return String(arr);
// } )

// console.log(stringify);

// 3. Capitalize the first letter of each name and make the rest of the characters lowercase

// const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

// const capitalizeNames = names.map(function(names){
//     return names.charAt(0).toUpperCase() + names.slice(1).toLowerCase();
// })

// console.log(capitalizeNames);

// 4. Make an array of strings of the names

const users = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

// const namesOnly = users.map(function(user){
//     return user.name
// })

// console.log(namesOnly)

//5. Make an array of strings of the names saying whether or not they can go to the Matrix

// const makeStrings = users.map(function(user){
//     if (user.age > 18){
//         return user.name + " can go to the Matrix";
//     } else {
//         return user.name + " is under age!!";
//     }
// })

// console.log(makeStrings)

// 6. Make an array of the names in h1s, and the ages in h2s

const readyToPutInTheDOM = users.map(function(user){
    return `<h1>${user.name}</h1><h2>${user.age}</h2`;
})

console.log(readyToPutInTheDOM);