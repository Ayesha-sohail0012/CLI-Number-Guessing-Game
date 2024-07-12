#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compared user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessednumber",
        type: "number",
        message: "Please guess a number ",
    }]);
console.log(answer);
if (answer.userGuessednumber === randomnumber) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("AHH! you lost.");
}
