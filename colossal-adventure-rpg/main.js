
const readlineSync = require('readline-sync');

// const rl = readlineSync.createInterface({
//  input: process.stdin,
//  output: process.stdout
// })

const name = readlineSync.question('Hey there young Pokemon Trainer! What is your name?\n');

readlineSync.question('Top of the morning to ya ' + name + ', welcome to Pallet Town!\n This is where you will start your journey to become a Pokemon master.\n In order to battle and gain experience you will need to walk around in the vegetated areas to find Wild Pokemon!\n Then you can battle them to gain HP and experience.\n At any time you can also choose to exit or select print to see all of the data about your profile.\n Press Enter to begin. ');

// readlineSync.promptCLLoop({
//     p: function(target, into) {
//       console.log('Name: ' + name + ': \n' + 'User Health: ' + userHealth + '\nTreasure: ' + 'Items: ' + pickUp);
//       // Do something...
//     },
//     Print: function(target, into) {
//       console.log('Name: ' + name + ': \n' + 'User Health: ' + userHealth + '\nTreasure: ' + 'Items: ' + pickUp);
//       // Do something...
//     },
//     bye: function() { return true; }
//   });
//   console.log('Exited');

// readlineSync.emitKeypressEvents(process.stdin)
// process.stdin.on('keypress', (str, key) => {
//     if (key.name === 'p') {
//         process.stdout.write('Name: ' + name + ': \n' + 'User Health: ' + userHealth + '\nTreasure: ' + 'Items: ' + pickUp);
// }})

const wildPokemons = ['Rhydon', 'Alakazam', 'Electrode'];
const treasure = ['1 entire Bitcoin', 'Redbull and a Chikfila Sandwich', 'A Tesla Model Y'];
var prize = [];
let userHealth = 30;
const options =['Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game() {
    const attackPower = Math.floor(Math.random() * (8 - 1) + 2);
    const wildPokemon = wildPokemons[Math.floor(Math.random() * wildPokemons.length)];
    let wildPokemonHealth = 30;
    const wildPokemonPower = Math.floor(Math.random() * (8 - 3) + 2);

    const index = readlineSync.keyInSelect(options, 'What is next on the horizon for you?');

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print') {
        console.log('Name: ' + name + ': \n' + 'User Health: ' + userHealth + '\nTreasure: ' + 'Items: ' + pickUp);
    } else if (options[index] === 'Walk') {
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking around and no sign of wild Pokemon here so far.');
        } else if (key >= .3) {
            console.log('A wild ' + wildPokemon + ' has appeared!\n What would you like to do?');

            while(wildPokemonHealth > 0 && userHealth > 0) {

                // readlineSync.emitKeypressEvents(process.stdin);
                //     if (process.stdin.isTTY)
                //     process.stdin.setRawMode(true);

                //     process.stdin.on('keypress', (str, key) => {
                //         if(key.name == 'Print' || key.name == 'p'){
                //             console.log('Name: ' + name + ': \n' + 'User Health: ' + userHealth + '\nTreasure: ' + 'Items: ' + pickUp);
                //         }
                //         // console.log(str)
                //         // console.log(key)
                //         })

                const user = readlineSync.question('Enter "r" to run, or enter "a" to attack! ');

                switch (user) {
                    case 'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log('You Cant escape! ' + wildPokemon + ' attacked you, causing a damage total of: ' + wildPokemonPower + ' Hit Points.');
                        } else {
                            console.log('You ran away successfully. Way to go champ!');
                            break;
                        }
                    case 'a':
                        wildPokemonHealth -= attackPower;
                        console.log('Your pokemon attacked ' + wildPokemon + ' with ' + attackPower + ' Hit Points.');

                        userHealth -= wildPokemonPower;
                        console.log('Enemy Pokemon just attacked you with ' + wildPokemonPower + ' Hit Points.');
                                           
                        if (wildPokemonHealth <= 0) {
                            console.log('Nice work! You defeated ' + wildPokemon + '.\n' + wildPokemon + ' left behind: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .3) {
                                prize.push(pickUp);
                            }
                        } else if (userHealth <= 0) {
                            console.log(wildPokemon + ' has defeated your Pokemon. You blacked out! You will respawn at the nearest Pokemon Center.');
                        }
                }
            }
        }
    }
}

while(userHealth > 0) {
    userRestore = function() {
        userActive = true;
        userHealth = 30;
    };
    userRestore();
    game();
}

// Some Issues I am having: 
// After you run away successfully, it doesnt return you to the main menu. 
// You are stuck in the run or attack decision loop. 
// Also - I cant figure out a way to make it print on command at any time. 

// Proposed solution that didnt work:
// case 'p':
//     console.log('Name: ' + name + ': \n' + 'User Health: ' + userHealth + '\nTreasure: ' + 'Items: ' + pickUp);

// The year is 1985. Your job is to build a text-based (console) RPG game.

// The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

// ### **Project Requirements:**

// 1. Console must greet player with a fun message
// 2. Console must ask for the player's name and store it
// 3. Walking:
// - The console will ask the user to enter a "w" to walk
// - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// - Use a while loop to control this flow.
// 4. If a wild enemy appears:
// - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// - The user can decide to attack or run
// - If attacking, a random amount of damage will be dealt between a min and max
// - If running, there will be a 50% chance of escaping
// - After the player attacks or runs the enemy attacks back for a random damage amount
// - The player and enemy will attack each other in a loop until one of them passes out or dies.
// - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
// - If the enemy kills the player the console prints a cool death message and the game ends
// 5. Inventory
// - When the player kills enemies, they are awarded with items
// - If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory