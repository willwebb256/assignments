/* 
1- Ask the user, "What operation would you like to perform?"
2 - Then the user enters one of these options: "/" "*""+" "-"
3- If the user enters an invalid character, print "That is not a valid operation" and then re-start the program
4- After the user enters a valid operation, ask the user, "Please enter the first number"
5- The user then enters any group of numbers. If the user enters something that isn't a number, print "This is not a number" and then re-ask the question
6- After a valid number is entered, ask the user "Please enter the second number". Perform the same error handling as before.
7- Then perform the proper math operation and print the result as "The result is: X" where it is the actual result
8- We'll use the readline-sync npm for this project
*/


var readline     = require("readline-sync");

var operations   = ['+', '-', '*', '/'];
var index        = null;
var operator     = null;
var firstNumber  = 0;
var secondNumber = 0;

function operationQuestion () {
    operator = readline.question('What operation would you like to perform? '
        +'\nOptions:'
        +'\nSum ('+operations[0]+')'
        +'\nSubtraction ('+ operations[1]+')'
        +'\nMultiplication ('+ operations[2]+')'
        +'\nDivision ('+ operations[3]+')\n'

    );

    if (!operations.includes(operator)) {
        console.log('That is not a valid operation');
        operationQuestion();
    }

    firstNumber = readline.questionInt('Type the first number: ');
    secondNumber = readline.questionInt('Type the second number: ');

    switch(operator) {
        case '+':
            console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber+secondNumber));
            break;
        case '-':
            console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber-secondNumber));
            break;
        case '*':
            console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber*secondNumber));
            break;
        case '/':
            console.log('The result of '+firstNumber+operator+secondNumber+' = '+ (firstNumber/secondNumber));
            break;
        default:
            console.log('Something went wrong :(');
    }
}

operationQuestion();