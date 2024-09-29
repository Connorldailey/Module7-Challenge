// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseBadges = {
  'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg', 
  'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg', 
  'GNU General Public License v3.0 (GPL v3)': 'https://img.shields.io/badge/License-GPLv3-blue.svg', 
  'BSD 3-Clause License': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg', 
  'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg', 
  'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg', 
  'None': '',
};
function renderLicenseLink(license) {
  return licenseBadges[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
