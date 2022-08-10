// const readlineSync = require('readline-sync');

// Import all the other add ons 
// and lets see if we can make some of the fonts rainbow colored and cool tomorrow. 

import readlineSync from 'readline-sync';
import chalk from 'chalk';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const log = console.log
chalk.level = 1;
log(chalk.yellow('Welcome to The Pokemon Multiverse!'));

const name = readlineSync.question(chalk.cyanBright('Hey there young Pokemon Trainer! What is your name?\n'));

readlineSync.question(chalk.greenBright('Top of the morning to ya ' + name + ', welcome to Pallet Town!\n This is where you will start your journey to become a Pokemon master.\n In order to battle and gain experience you will need to walk around in the vegetated areas to find Wild Pokemon!\n Then you can battle them to gain HP and experience.\n At any time you can also choose to exit or select print to see all of the data about your profile.\n Press Enter to begin. '));

const wildPokemons = ['Rhydon', 'Alakazam', 'Electrode'];
const treasure = ['1 entire Bitcoin', 'Redbull and a Chikfila Sandwich', 'Tesla'];
var prize = [];
let userHealth = 30;
const options =['Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game() {
    const attackPower = Math.floor(Math.random() * (8 - 1) + 2);
    const wildPokemon = wildPokemons[Math.floor(Math.random() * wildPokemons.length)];
    let wildPokemonHealth = 30;
    const wildPokemonPower = Math.floor(Math.random() * (8 - 3) + 2);

    const index = readlineSync.keyInSelect(options, chalk.red('What is next on the horizon for you?'));

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print') {
        console.log(chalk.greenBright('Name: ' + name + ': \n' + 'User Health: ' + userHealth + '\nTreasure: ' + 'Items: ' + pickUp));
    } else if (options[index] === 'Walk') {
        let key = Math.random();
        if (key <= .3) {
            console.log(chalk.greenBright('Walking around and no sign of wild Pokemon here so far.'));
        } else if (key >= .3) {
            console.log(chalk.magentaBright('A wild ' + wildPokemon + ' has appeared!\n What would you like to do?'));

            while (wildPokemonHealth > 0 && userHealth > 0) {
            // Change to while 

                const user = readlineSync.question(chalk.yellow('Enter "r" to run, or enter "a" to attack! '));

                switch (user) {
                    case 'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log(chalk.redBright('You Cant escape! ' + wildPokemon + ' attacked you, causing a damage total of: ' + wildPokemonPower + ' Hit Points.'));
                        } else {
                            console.log(chalk.bgRedBright('You ran away successfully. Way to go champ!'));
                            break;
                        }
                    case 'a':
                        wildPokemonHealth -= attackPower;
                        console.log(chalk.greenBright('Your pokemon attacked ' + wildPokemon + ' with ' + attackPower + ' Hit Points.'));

                        userHealth -= wildPokemonPower;
                        console.log(chalk.red('Enemy Pokemon just attacked you with ' + wildPokemonPower + ' Hit Points.'));
                                           
                        if (wildPokemonHealth <= 0) {
                            console.log(chalk.bgGreenBright('Nice work! You defeated ' + wildPokemon + '.\n' + wildPokemon + ' left behind: ' + pickUp));
                            let loot = Math.random();
                            if (loot <= .3) {
                                prize.push(pickUp);
                            }
                        } else if (userHealth <= 0) {
                            console.log(chalk.bgBlackBright(wildPokemon + ' has defeated your Pokemon. You blacked out! You will respawn at the nearest Pokemon Center.'));
                        }
                }
            }
        }
    }
}

while(userHealth > 0) {
    let userRestore = function() {
        let userActive = true;
        let userHealth = 30;
    };
    userRestore();
    game();
}