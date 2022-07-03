/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function who_wins (kryptonite_exists, enemy_name) 
    if (kryptonite_exists) {
     "Superman beats " + enemyName + ", of course";
}else {
     "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyname +" could possibly win this one.";
}
 for (var i = 0; i < enemies.length; i++) {
    var kryptonite_exists;
    if (i%2 === 0) {
        kryptonite_exists = true;
    } 
    
    else {
        kryptonite_exists = false;
    }
    console.log(who_wins (kryptonite_exists, enemies[i]) );
}

function howAttractedIsLoisLaneToMe () 
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return math.floor( (math.random() * 10) + 1);
}

console.log(howAttractedIsLoisLaneToMe ()) ;

var clarkKent = true;
var superman = false;

while (clarkKent){

    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}
