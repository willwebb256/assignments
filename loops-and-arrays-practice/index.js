
// 1.

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
// var computerCount = 0;

// const result = officeItems.filter(i => i === "computer").length;
// console.log('number of the found elements: ' + result);

// for (var i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") 
//         computerCount++;
//         console.log(computerCount);
    
    //} This is a for loop that I built that kind of works - but it displays all the logs up until the final count, which is frustrating.

//2. 

var oldEnoughCount = 0;
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) 
        oldEnoughCount++;
        
         console.log(sum(oldEnoughCount));

  }   



       

  
  
  