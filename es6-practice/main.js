// 1. Let and Const vs Var:

// let name = "John"
// let age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// 2. Re-write the .map function to use arrows instead:

// const carrots = ["bright orange", "ripe", "rotten"]

// let mapVegetables = (arr) => arr.map(); 


// console.log(carrots)

//3. Re-write this .filter() ’s callback function using an arrow function:

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// let filterForFriendly = people.filter(person => person.friendly);
   


// console.log(filterForFriendly)

// 4. Re-write the following functions to be arrow functions:

// function doMathSum(a, b) {
//     return a + b
// }

// let sum2 = (a, b) => a + b;

// var produceProduct = function(a, b) {
//     return a * b
// }

// let produceProduct2 = (a, b) => a * b;


// 5. Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

// let firstName = "Jane"
// let lastName = "Doe"
// let age = 100

// console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)

// 6. Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

// let firstName = "Janice"
// let location = "Hawaii"

// console.log(`Hi ${firstName}!\ Welcome to ${location}.\ I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)


