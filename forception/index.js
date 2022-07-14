var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var splitAlphabet = alphabet.split("")
// console.log(splitAlphabet)

var forception = people.concat(splitAlphabet)

//console.log(forception)

for (var i = 0; i < forception.length; i++) {
    for (var j = 0; j < people.length; j++) {
    console.log(people[j] +": " + splitAlphabet)
}
}
