// 1. Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// capilizeAndLowercase("HelLo") // => "HELLOhello"

// var hello = "hElLo"
// var uppercasedHello = hello.toUpperCase()
// var lowercasedHello = hello.toLowerCase()
// var capitalizeAndLowercase = uppercasedHello + lowercasedHello
// console.log(capitalizeAndLowercase)

// 2. Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

// Hint: You'll need to use Math.floor(). The Math.floor() function returns the largest integer less than or equal to a given number.

// console.log(Math.floor(5.95));
// expected output: 5

// var helloMiddleIndex = hello.findMiddleIndex
// var helloMathFloor = Math.floor(hello)
// //console.log(helloMiddleIndex)

// console.log(helloMathFloor)

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

// returnFirstHalf = lowercasedHello.slice(0, 2)
// returnSecondHalf = lowercasedHello.slice(3)
// console.log(returnFirstHalf)

var helloWorld = "hello world"
var uppercasedhelloWorld = helloWorld.toUpperCase()
var lowercasedhelloWorld = helloWorld.toLowerCase()
var returnFirstHalf = uppercasedhelloWorld.slice(0, 5)
var returnSecondHalf = lowercasedhelloWorld.slice(6)
var capilizeAndLowercase = returnFirstHalf + " " + returnSecondHalf

console.log(capilizeAndLowercase)




