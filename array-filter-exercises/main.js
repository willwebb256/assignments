// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// const arr = [3, 6, 8, 2]

// const result = arr.filter(function(num){
//     if(num > 5){
//         return num
//     }
// })

// console.log(result)


// 2) Given an array of numbers, return a new array that only includes the even numbers.

// const result = arr.filter(function(num){
//     if(num % 2 === 0){
//         return num
//     }
// })

// console.log(result)

// 3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// const characters = ["dog", "wolf", "by", "family", "eaten", "camping"];

// const result = characters.filter(function(char){
//     if(char.length <= 5){
//         return char
//     }
// })

// console.log(result)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const arr = [ 
// { name: "Angelina Jolie", member: true },
// { name: "Eric Jones", member: false },
// { name: "Paris Hilton", member: true },
// { name: "Kayne West", member: false },
// { name: "Bob Ziroll", member: true }]

// const peopleWhoBelongToTheIlluminati = arr.filter(function(peeps){
//     if(peeps.member === true){
//         return peeps
//     }
// })

// console.log(peopleWhoBelongToTheIlluminati)

// 5. Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const arr = [
{ name: "Angelina Jolie", age: 80 },
{ name: "Eric Jones", age: 2 },
{ name: "Paris Hilton", age: 5 },
{ name: "Kayne West", age: 16 },
{ name: "Bob Ziroll", age: 100 }]

const ofAge = arr.filter(function(old){
    if(old.age > 18){
        return old
    }
})

console.log(ofAge)