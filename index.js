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
        message: 'Enter information about the license of your project.',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0 (GPL v3)', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'The Unlicense', 'None'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Explain how to contribute to the project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for your project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide information about how to ask quesitons, such as listing contact information.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
