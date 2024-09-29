// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any. Include any other attributions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: [
            'MIT License', 
            'Apache License 2.0', 
            'GNU General Public License v3.0 (GPL v3)', 
            'BSD 3-Clause License', 
            'Mozilla Public License 2.0', 
            'The Unlicense', 
            'None'
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how to contribute to the project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for your project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Generate the markdown for the README
    const markdownContent = generateMarkdown(data);
    // Write the content to the README file
    fs.writeFile(fileName, markdownContent, err => {
        err ? console.error(err) : console.log('README successfully generated!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // Do nothing for now
    })
}

// Function call to initialize app
init();
