#! /usr/bin/env nodetsc

import inquirer from "inquirer"
const randomNumber = Math.floor(Math.random()*10+1);

const answers = await inquirer.prompt([
    {
      name : "userGuessedNumber",
      type : "number" ,
      message : "please guess a number: ",


    }
]);
if (answers.userGuessedNumber === randomNumber) {
  console.log("HURRY!!! you guessed it right");
} 
else{console.log("you guessed it wrong")}
