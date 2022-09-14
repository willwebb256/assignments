// 1. Rest Operator: help this function return an array of animals, no matter how many annimals are passed to it: 

// function collectAnimals(/*your code here*/) {
    /*and here*/
//}

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function collectAnimals(...animals) {
//     return animals;

// }

//  const array1 = [1, 2, 3];
//  const array2 = [4, 5, 6];
//  const array3 = [];

//  array3.push(...array1, ...array2);
//  console.log(array3);

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// 2. write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

// function combineFruit(fruit, sweets, ...vegetables){
//     return {fruit, sweets, vegetables};
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]));

// function combineFruit(fruit, sweets, vegetables){
//     return {}
//     }
            
// combineFruit(["apple", "pear"],
//                 ["cake", "pie"],
//                 ["carrot"])
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


// let add = (a, b) => a + b;

// console.log(add(1, 2))

// 3. Use destructuring to use the property names as variables. Destructure the object in the parameter:
 
const parseSentence = {
    'location': 'Burly Idaho',
    'duration': '2 weeks'
  };

parseSentence2(parseSentence)

function parseSentence2({location, duration}){
    console.log(`We're going to have a good time in ${location} for ${duration}`)
  }

//   console.log(parseSentence2)


