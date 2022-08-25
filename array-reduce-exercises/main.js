// 1. Turn an array of numbers into the total of all the numbers

// const nums = [1, 2, 3]

// const result = nums.reduce(function(final, num){
//     final += num
//     return final
// })

// console.log(result)


// 2. Turn an array of numbers into a long string of all those numbers

// const stringConcat = nums.reduce(function(final, num){
//     return final + num
// },[])

// console.log(stringConcat)

// 3. Turn an array of voter objects into a count of how many people voted

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// const totalVotes = voters.reduce(function(final, voter){
//     if(voter.voted){
//         final.didVote++
//     } else {
//         final.didntVote++
//     }
//     return final
// },{didVote: 0, didntVote: 0})

// console.log(totalVotes)

// 5. Given an array of arrays, flatten them into a single array

// const arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// const flatten = arrays.reduce(function(final, array){
//     return final.concat(array)
// },[]);

// console.log(flatten)

// 6. Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, 
// and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. 
// See the example output at the bottom.


const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResults = voters.reduce(function(final, voter){
        if(voter.age < 26){
       final.numYoungPeople++
    } if(voter.age > 25 && voter.age < 36){
        final.numMidsPeople++
    } if(voter.age > 36) {
        final.numOldsPeople++
    } if(voter.age < 26 && voter.voted){
        final.numYoungVotes++
    } if(voter.age > 25 && voter.age < 36 && voter.voted){
        final.numMidVotes++
    } if(voter.age > 36 && voter.voted) {
        final.numOldVotes++
    }
    return final
},{numYoungPeople: 0, numMidsPeople: 0, numOldsPeople: 0, numYoungVotes: 0, numMidVotes: 0, numOldVotes: 0})

console.log(voterResults)

