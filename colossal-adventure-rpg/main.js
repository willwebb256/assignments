#!/usr/bin/env node

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




import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
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
    Sometimes you'll be able to run, but other times you won't be able to escape and will need to fight. If you win, you'll get more HP and win some cool prizes. If you lose, you'll party in Valhalla with the Gods! Feel free to type Print or p anytime to see your stats and inventory! Good Luck, and Catch 'em All!
  `);
}



async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Hey Hi, How are ya? What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}



async function question1() {
    const answers = await inquirer.prompt ({
       name: 'question_1', 
       type: 'list',
       message: 'Are you ready to wander through the murky forest in pursuit of rare Pokemon?\n',
       choices: [
            'Yes, we Walk',
            'No, I want to rest',
       ],
    });

    return handleAnswer(answers.question_1 == 'Yes, we Walk');
}

    async function handleAnswer(isCorrect) {
        const spinner = createSpinner('Cool Cool, one second...').start();
        await sleep();

        if (isCorrect) {
            spinner.success({ text: `Nice work ${playerName}, let's roll!`});
        } else {
            spinner.error({ text: `😴😴😴 Night night ${playerName}, sleep tight!`});
            process.exit(1);
        }
    }

function winner() {
    console.clear();
    const msg = `congrats, ${playerName}!\n You are a Poke MASTER!`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

await welcome();
await askName();
await question1();
await winner();
