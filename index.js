// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Create an array of questions for user input
const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',
    },
    // Description section content
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
    },
    // Installation section content
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project?',
    },
    // Usage section content
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    // Credits section content
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any. Include any other attributions.',
    },
    // License selection
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
    // Contributing section content
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how to contribute to the project.',
    },
    // Tests section content
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for your project.',
    },
    // Github username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    // Generate the markdown content for the README
    const markdownContent = generateMarkdown(data);
    // Write the markdown content to the README file
    fs.writeFile(fileName, markdownContent, err => {
        err ? console.error(err) : console.log('README successfully generated!')
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./dist/generatedREADME.md', answers);
    });
}

// Function call to initialize app
init();
