// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
    if (license !== 'None') {
        return ` ![github license] (https://img.shields.io/badge/license-${license}-green.svg)`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    if (license !== 'None') {
        return ` [license] (#license)`;
    }
    return '';
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
    if (license !== 'None') {
        return ` ## License`;
    }
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ${renderLicenseBadge(data.license)}


## Description

${data.description}



## Table of Contents (Optional)

- [Installation](#installation)

- [Usage](#usage)

${renderLicenseLink(data.license)}



## Installation


${data.installation}


## Usage

${data.usage}

${renderLicenseSection(data.license)}


## Contibuting

${data.contributing}

## Tests

To run test run the following command: 

${data.test}

## Questions 

if you have any questions about the repo or an open issue contact me at ${data.email}. You can find more of my work @ [${data.github}](https://github.com/${data.github}/)
`;
}



module.exports = generateMarkdown;