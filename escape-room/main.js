// Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.

// # **Game start:**

// Tell the user their options:

// 1. Put hand in hole
// 2. Find the key, or
// 3. Open the door

// They can't open the door unless they find the key first.They die if they put their hand in the hole.

// # **JavaScript tools that may help**

// - while loop
// - variables
// - booleans
// - if/else if/else OR switch statement
// - `readline-sync` (syntax for installing and using below)

// var operations   = ['+', '-', '*', '/'];
// var index        = null;
// var operator     = null;
// var firstNumber  = 0;
// var secondNumber = 0;

// function operationQuestion () {
//     operator = readline.question('What operation would you like to perform? '
//         +'\nOptions:'
//         +'\nSum ('+operations[0]+')'
//         +'\nSubtraction ('+ operations[1]+')'
//         +'\nMultiplication ('+ operations[2]+')'
//         +'\nDivision ('+ operations[3]+')\n'

//     );

//     if (!operations.includes(operator)) {
//         console.log('That is not a valid operation');
//         operationQuestion();
//     }

//     firstNumber = readline.questionInt('Type the first number: ');
//     secondNumber = readline.questionInt('Type the second number: ');

//     switch(operator) {
//         case '+':
//             console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber+secondNumber));
//             break;
//         case '-':
//             console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber-secondNumber));
//             break;
//         case '*':
//             console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber*secondNumber));
//             break;
//         case '/':
//             console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber/secondNumber));
//             break;
//         default:
//             console.log('Something went wrong :(');
//     }
// }

// operationQuestion();


const readline = require("readline-sync");
const name = readline.question("What is your name? ");
const count = 0;
const operations   = ['1', '2', '3', 'Z'];
var index        = null;
var operator     = null;
// var firstNumber  = 0;
// var secondNumber = 0;

function operationQuestion () {
    operator = readline.question(`Hello ${name}. You are trapped in a labrynth and must choose wisely to escape. Which operation would you like to perform? `
        +'\nOptions:'
        +'\nPut Hand in Hole ('+operations[0]+')'
        +'\nFind the Key ('+ operations[1]+')'
        +'\nOpen the Door ('+ operations[2]+')'
        +'\nBuy Bitcoin ('+ operations[3]+')\n'

    );

    if (!operations.includes(operator)) {
        console.log('That is not a valid operation');
        operationQuestion();
    }

    // firstNumber = readline.questionInt('Type the first number: ');
    // secondNumber = readline.questionInt('Type the second number: ');

    switch(operator) {
        case '1':
            console.log('Ooof! Sorry man, there is a deadly snake in that hole. You are dead. Please try again.');
            break;
        case '2':
            console.log('Good! Now that you have the key, you should use it to open the door!');
            break;
        case '3':
            console.log(`Great job ${name}! You are free at last. Now go buy some Bitcoin while you still can!`);
            break;
        case 'Z':
            console.log('All the Bitcoin has been bought. Congrats bro. You are now rich!');
            break;
        default:
            console.log('Something went wrong :(');
    }
}

operationQuestion();