#! /usr/bin/env node
import inquirer from 'inquirer';

// Define the currency conversion rates
const currency:any = {
  USD: 1,
  EUR: 0.91,
  INR: 74.57,
  GBP: 0.76,
  PKR: 208
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ['USD', 'EUR', 'INR', 'GBP', 'PKR']
  },
  {
    name: "amount",
    message: "Enter the amount to convert",
    type: "number",
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ['USD', 'EUR', 'INR', 'GBP', 'PKR']
  }
]);

let fromRate = currency[user_answer.from];
let toRate = currency[user_answer.to];
let baseAmount = user_answer.amount / fromRate;
let convertedAmount = baseAmount * toRate;

// Print the result
console.log(`Converted amount: ${convertedAmount} ${user_answer.to}`);


// Call the function to start the currency conversion process

