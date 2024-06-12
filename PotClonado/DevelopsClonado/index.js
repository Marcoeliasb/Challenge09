const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require ("./UtilsC/generateMarkdown");
const { inherits } = require("util");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Whats the title of the project",
    },
    {
        type: "input",
        name: "description",
        message: "Whats the name of the project",
    },
    {
        type: "input",
        name: "installation",
        message: "The instructions of the installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Whats the usage information",
    },
    {
        type: "list",
        name: "license",
        message: "What is the license of the project",
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email",
    },
];

function writeToFile (fileName, data){
    fs.writeFile(fileName, data, (err) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}
init();