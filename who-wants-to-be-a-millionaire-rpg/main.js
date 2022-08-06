#!/usr/bin/env node

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
