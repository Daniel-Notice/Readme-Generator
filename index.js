const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please state the name of your project",
  },
  {
    type: "input",
    name: "description",
    message: "Tell us what your project is about",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license that is suited to your project",
    choices: [
      "MIT License",
      "APACHE License 2.0",
      "Mozilla Public License",
      "The Unlicense",
      "Boost Software License 1.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "require",
    message: "Please state any project dependencies",
  },
  {
    type: "input",
    name: "usage",
    message: "Please state the technologies used in this project",
  },
  {
    type: "input",
    name: "creator",
    message: "Please enter your Github username",
  },
  {
    type: "input",
    name: "name",
    message: "State your full name",
  },
  {
    type: "input",
    name: "email",
    message: "Enter a valid email address",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors by entering their github username",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide a walkthrough of tests if possible",
  },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((responses) =>{
    console.log("README.md file is created...")
    writeToFile("./Readme-Sample/README.md",generateMarkdown({...responses}))
})
}

// function call to initialize program
init();
