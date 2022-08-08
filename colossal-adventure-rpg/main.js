#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import keyIn from 'readline-sync';
import readlineSync from 'readline-sync';

// Defined Objects and Functions:

let playerName = {
    userHealth: 40,
    inventory: [],

}
let enemies = [ 
    {
    enemyName: "Scyther",
    wildPokemonHealth: 30,
    treasure: "1 entire Bitcoin",
},
{
    enemyName: "Alakazam",
    wildPokemonHealth: 35,
    treasure: "Redbull and a Chikfila Sandwich",
},
{
    enemyName: "Porygon",
    wildPokemonHealth: 25,
    treasure: "Tesla Model Y",
}
]
let prize = [];
const options =['Walk', 'Exit', 'Print'];
// let pickUp = enemies.treasure[Math.floor(Math.random() * enemies.treasure)];

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));




// These are the functions in order that will walk you through the game:

// 1.
async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Welcome to Pallet Town! Prepare to explore the Pokemon Multiverse! \n'
  );
  await sleep();
  rainbowTitle.stop();
    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    You are now in Pallet Town, a great place to start your journey to become the Ultimate Pokemon Master.
    If you walk around, you might encounter a wild Pokemon and need to ${chalk.bgRed('BATTLE!')}
    Sometimes you'll be able to run, but other times you won't be able to escape and will need to fight. 
    \nIf you win, you'll get more HP and win some cool prizes. If you lose, you'll party in Valhalla with the Gods!
    \nFeel free to type Print or p anytime to see your stats and inventory! Good Luck, and Catch 'em All!
  `);
}
// 2.
async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Before we get started, what is your name?',
        default() {
            return 'player';
        },
    });
    playerName = answers.player_name;
}
// 3.
async function question1() {
    const answers = await inquirer.prompt ({
       name: 'question_1', 
       type: 'list',
       message: 'What would you like to do?\n',
       choices: [
            'Walk',
            'Exit',
       ],
    });
    return handleAnswer(answers.question_1 == 'Walk');
}
    async function handleAnswer(isCorrect) {
        const spinner = createSpinner('Sure thing, one second...').start();
        await sleep();

        if (isCorrect) {
            spinner.success({ text: `Alright ${playerName}, let's roll!`});
        } else {
            spinner.error({ text: `😴😴😴 Boring ${playerName}, see you later!`});
            process.exit(1);
        }
    }
// 4. 

    async function question2() {
        const answers = await inquirer.prompt ({
            name: 'question_2', 
            type: 'list',
            message: 'A Wild Pokemon Appeared! What would you like to do?\n',
            choices: [
                'Attack',
                'Run',
                'Print',
            ],
        });
        
        return handleAnswer2(answers.question_2 == 'Attack');
    }
     
   
     async function handleAnswer2(isCorrect) {
                const spinner = createSpinner('Bold strategy, Cotton! Lets see how it pans out for ya!').start();
                await sleep();
        
                if (isCorrect) {
                    spinner.success({ text: `Nice work ${playerName}, your Pokemon used Quick Attack! caused 30 Damage Points to enemy Pokemon!`});
                } else {
                    spinner.error({ text: `Wow ${playerName}, you got away safely!`});
                    process.exit(1);
                }
            }
// 5. 
    async function game() {
            const attackPower = Math.floor(Math.random() * (8 - 1) + 2);
            const wildPokemonPower = Math.floor(Math.random() * (8 - 3) + 2);
            function rollEncounter(min, max) {
            let encounterEnemy = Math.floor(Math.random() * 3) === 1
                if(!encounterEnemy){
                let allClear = readline.keyIn("Nothing to see here, no wild Pokemon found."); //readline keyInPause --> nothing is found
            }
                if(encounterEnemy){
                    let enemy = enemies[math.floor]
                    let message = readline.keyIn( `youve encountered ${enemy.name}!`);
                    fightEnemy(enemy)
                }
            return Math.floor(Math.random() * (max-min) + min);
        }

            function wildPokemonEncounter(enemy) {
                rollEncounter(1, 4)
                    if (diceRoll === 1) {
                    scyther = enemy
                    } else if (diceRoll === 2) {
                     alakazam = enemy
                    } else if (diceRoll === 3) {
                    porygon = enemy
                }
            }

            function openInventory () {
                for( let i = 0; playerName.inventory.length; i++ ){
                    console.log(playerName.inventory[i])
                }                 
            }

            function calculateEnemyDamage () {
            console.log(playerName.userHealth -= enemyAttack)
        }

            function checkUserHealth () {
                console.log(playerName.userHealth)
            }

            function checkEnemyHealth () {
                console.log(wildPokemonEncounter.wildPokemonHealth)
            }

            function attackWildPokemon () {
                console.log(attackPower)
        }
        // let key = Math.random();
        //     if (key <= .3) {
        //     console.log('Walking around and no sign of wild Pokemon here so far.');
        // } else if (key >= .3) {

            console.log('A wild ' + enemies + ' has appeared!\n What would you like to do?');

            while(enemies.wildPokemonHealth > 0 && playerName.userHealth > 0) {

                const user = readlineSync.question('Enter "r" to run, or enter "a" to attack! ');
                    switch (user) {
                    case 'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log('You Cant escape! ' + enemies + ' attacked you, causing a damage total of: ' + wildPokemonPower + ' Hit Points.');
                        } else {
                            console.log('You ran away successfully. Way to go champ!');
                            break;
                        }
                    case 'a':
                        enemies.wildPokemonHealth -= attackPower;
                        console.log('Your pokemon attacked ' + enemies + ' with ' + attackPower + ' Hit Points.');

                        playerName.userHealth -= wildPokemonPower;
                        console.log('Enemy Pokemon just attacked you with ' + wildPokemonPower + ' Hit Points.');
                                           
                        if (enemies.wildPokemonHealth <= 0) {
                            console.log('Nice work! You defeated ' + enemies + '.\n' + enemies + ' left behind: ' + pickUp);
                            let loot = enemies.treasure();
                            if (loot <= .3) {
                                prize.push(pickUp);
                            }
                        } else if (playerName.userHealth <= 0) {
                            console.log(enemies + ' has defeated your Pokemon. You blacked out! You will respawn at the nearest Pokemon Center.');
                           }
                }
            }
        }
    
    
    //             let inGame = true;
    //             let inBattle = false;

                   // const index = readlineSync.keyInSelect(options, 'What is next on the horizon for you?');

    // if (options[index] == 'Exit') {
    //     playerName.userHealth = 0;
    // } else if (options[index] == 'Print') {
    //     console.log(playerName);
    // } else if (options[index] === 'Walk') {

    //            

// 6.
function winner() {
    console.clear();
    const msg = `congrats, ${playerName}!\n You are a Poke MASTER!`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}



// Other things that help make this game run:


await welcome();
await askName();
await question1();
await question2();
await game();
await winner();

// while(playerName.userHealth > 0) {
//     userRestore = function() {
//         userActive = true;
//         userHealth = 40;
//     }};
//     userRestore();
//     game();
