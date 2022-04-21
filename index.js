// TODO: Include packages needed for this application
const fs= require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown= require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'github', 
        message: 'What is your GitHub username?'
    },
    {
        type: 'input', 
        name: 'email', 
        message: 'What is your email address?'
    },
    {
        type: 'input', 
        name: 'title', 
        message: 'What is your project name?'
    },
    {
        type: 'input', 
        name: 'description', 
        message: 'Write a brief description of your project'
    },
    {
        type: 'input', 
        name: 'installation', 
        message: 'No installation needed',
        default: 'npm i'
    },
    {
        type: 'input', 
        name: 'test', 
        message: 'N/A',
        default: 'npm test'
    },
    {
        type: 'input', 
        name: 'usage', 
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input', 
        name: 'contributing', 
        message: 'Are there any additional contributors to this project?'
    },
    {
        type: 'list', 
        name: 'license', 
        message: 'None',
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "IBM", "None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log("readme is being created");
        writeToFile("README.md", generateMarkdown({ ...answers }));
    }) ;
}

// Function call to initialize app
init();
