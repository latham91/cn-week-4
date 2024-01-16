// To anyone thats trying to run this code.
// Make sure you have installed the dependencies.
// clone the repo and run 'npm install' or 'yarn install' depending on what you use.
// I have added a start script to the package.json so you can run using.
// 'npm start' or 'yarn start'

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgWhiteBright.bold("Hello, welcome to the coffee shop!"));

const questions = [
    {
        type: "input",
        name: "name",
        message: chalk.yellowBright("What is your name?"),
        default: false,
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter your name.";
            }
        },
    },
    {
        type: "list",
        name: "order",
        message: chalk.yellowBright("What would you like to order?"),
        choices: ["Espresso", "Latte", "Cappuccino", "Mocha", "Macchiato"],
        default: false,
    },
    {
        type: "list",
        name: "size",
        message: chalk.yellowBright("What size would you like?"),
        choices: ["Small", "Medium", "Large"],
        default: "medium",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return "Please enter a size.";
            }
        },
    },
    {
        type: "confirm",
        name: "iced",
        message: chalk.yellowBright("Would you like your order iced?"),
        default: false,
    },
];

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(
            chalk.bgWhiteBright.bold(
                `Thanks ${answers["name"]}! Your order of "${answers["size"]} ${answers["iced"] ? "Iced" : "Hot"} ${
                    answers["order"]
                }" will be ready for you shortly!.`
            )
        );
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(chalk.red("Prompt could not be sent."));
        } else {
            console.log(chalk.red("Something else went wrong"));
        }
    });
