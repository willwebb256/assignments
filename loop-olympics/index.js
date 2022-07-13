// Premliminaries
// 1. Write a for loop that prints to the console the numbers 0 to 9:

// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// 2. Write a for loop that prints to the console 9 through 0:

// for (var i = 9; i >= 0; i--) {
//     console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// Bronze Medal: 
// 1. Write a for loop that will push the numbers 0 through 9 to an array.

// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// var numberArray = [];

// for(var i = 1; i <= 9; i++){
//     numberArray.push(i);
// }

// console.log(numberArray); 


// 2. Write a for loop that prints to the console only even numbers 0 through 100.

// for (var i = 0; i <= 100; i += 2) {
//     console.log(i)
    
// }

// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for (var i = 0; i < fruit.length; i+= 2) {
//     console.log(fruit[i])
// }

// Silver Medal: 

// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations


// 1. Write a loop that will print out all the names of the people in the array:

// for( var i = 0; i < peopleArray.length; i++) {
//     console.log (peopleArray[i].name)
// }


// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.

// var names = [];
// var occupations = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     names.push(i)
// }
// console.log(peopleArray);

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

// var names = [];
// var occupations = [];

// for (var i = 0; i < peopleArray.length; i+= 2) {
//     names.push(i)
// }
// console.log(peopleArray);
// Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.

//Gold Medal - Nesting: 

// Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

// var grid = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]

//     for(var i = 0; i < grid.length; i++) {
//         console.log(grid[i])
//     }

// 2. Create an array that mimics a grid like the following using nested for loops: 
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

    // var grid = [
    //     [0, 0, 0],
    //     [1, 1, 1],
    //     [2, 2, 2]
    // ]
    
    //     for(var i = 0; i < grid.length; i++) {
    //         console.log(grid[i])
    //     }

// 3. Create an array that mimics a grid like the following using nested for loops: 
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

// var grid = [
//     [0, 1, 2],
//     [0, 1, 2],
//     [0, 1, 2]
// ]

//     for(var i = 0; i < grid.length; i++) {
//         console.log(grid[i])
//     }

