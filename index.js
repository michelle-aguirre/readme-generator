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
        message: 'michelle-aguirre'
    },
    {
        type: 'input', 
        name: 'email', 
        message: 'michelleaguirre875@gmail.com'
    },
    {
        type: 'input', 
        name: 'title', 
        message: 'Professional README Generator'
    },
    {
        type: 'input', 
        name: 'description', 
        message: 'This application generates a README file automatically based on the users input.'
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
        message: 'As a developer I want a README generator so that I can quickly create a professional README for a new project.'
    },
    {
        type: 'input', 
        name: 'contributing', 
        message: 'Made by Michelle Aguirre'
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
