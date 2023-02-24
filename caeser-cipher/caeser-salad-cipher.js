var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(str, shift) {
    // The alphabet string
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Create a regular expression pattern to match any characters outside the alphabet
    var pattern = /[^a-z]/g;
    
    // Map each letter in the alphabet to its corresponding index (0-25)
    var alphaMap = {};
    for (var i = 0; i < alphabet.length; i++) {
      alphaMap[alphabet[i]] = i;
    }
    
    // Map each index (0-25) to its corresponding letter in the alphabet
    var reverseMap = {};
    for (var i = 0; i < alphabet.length; i++) {
      reverseMap[i] = alphabet[i];
    }
    
    // Shift each letter in the input string by the specified shift value
    var result = '';
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char.match(pattern)) {
        // If the character is not in the alphabet, leave it as is
        result += char;
      } else {
        // Otherwise, shift it by the specified amount
        var index = alphaMap[char];
        var shiftedIndex = (index + shift) % 26;
        var shiftedChar = reverseMap[shiftedIndex];
        result += shiftedChar;
      }
    }
    
    return result;
}

console.log(caesarCipher(input, shift));

// Just type the following into the terminal and it'll run: node caesar-salad-cipher.js
