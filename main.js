#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGessedNumber",
        type: "number",
        message: "Please guess a number b/w 1 to 6:",
    },
]);
if (answer.userGessedNumber === randomNumber) {
    console.log("Congratulations! You have won this game");
}
else {
    console.log("Alas! You have lost this game");
}
