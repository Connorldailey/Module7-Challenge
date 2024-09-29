// Create a function that returns a license badge based on which license is passed in
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
function renderLicenseBadge(license) {
  return licenseBadges[license] ? `\n![${license}](${licenseBadges[license]})\n` : '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
const licenseLinks = {
  'MIT License': 'https://opensource.org/licenses/MIT', 
  'Apache License 2.0': 'https://www.apache.org/licenses/LICENSE-2.0', 
  'GNU General Public License v3.0 (GPL v3)': 'https://www.gnu.org/licenses/gpl-3.0.en.html', 
  'BSD 3-Clause License': 'https://opensource.org/licenses/BSD-3-Clause', 
  'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/', 
  'The Unlicense': 'https://unlicense.org/',
  'None': '',
};
function renderLicenseLink(license) {
  return licenseLinks[license] ? `[${license}](${licenseLinks[license]})` : '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None' || !license) {
    return '';
  } else {
    return `## License \n
This project is licensed under the ${license} - see the ${renderLicenseLink(license)} for details.`;
  }
}

// Create a function that returns the questions section of README
function renderQuestionsSection(github, email) {
  if (github && email) {
    return `
If you have any questions about this project, feel free to reach out: \n
- **GitHub** [${github}](https://github.com/${github})
- **Email** ${email}
`;
  } else if (github) {
    return `
If you have any questions about this project, feel free to reach out: \n
- **GitHub** [${github}](https://github.com/${github})
`;
  } else if (email) {
    return `
If you have any questions about this project, feel free to reach out: \n
- **Email** ${email}
`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description \n
${data.description} \n
## Table of Contents \n
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions) \n
## Installation \n
${data.installation} \n
## Usage \n
${data.usage} \n
## Credits \n
${data.credits} \n
${renderLicenseSection(data.license)} \n
## Contributing \n
${data.contributing} \n
## Tests \n
${data.tests} \n
## Questions \n
${renderQuestionsSection(data.github,data.email)}
`;
}

export default generateMarkdown;
