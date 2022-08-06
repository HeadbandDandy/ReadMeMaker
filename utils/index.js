const { writeFile, copyFile } = require('./generateMarkdown')
let inquirer = require('inquirer');
const fs = require('fs');

  

const userQuestions = () => {
  return inquirer.prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'Who is the author? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else { 
          console.log('Please enter an author!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter a title!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmDescription',
      message: 'Would you like to enter some information about your ReadMe in the Description?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about your ReadMe:',
      when: ({ confirmDescription }) => confirmDescription
    },
    {
      type: 'confirm',
      name: 'confirmTable',
      message: 'Would you like to provide a table of contents?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide a table of contents:',
      when: ({ confirmTable }) => confirmTable
    },
    {
      type: 'confirm',
      name: 'confirmInstallation',
      message: 'Would you like to enter some information about the installation?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about the installation:',
      when: ({ confirmInstallation }) => confirmInstallation
    },
    {
      type: 'confirm',
      name: 'confirmUsage',
      message: 'Would you like to enter some information about the usage of this application?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about the usage:',
      when: ({ confirmUsage }) => confirmUsage
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to enter some information about the license?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmLicense }) => confirmLicense
    },
    {
      type: 'confirm',
      name: 'confirmContribution',
      message: 'Were there any contributors?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about the contributors:',
      when: ({ confirmContribution }) => confirmContribution
    },
    {
      type: 'confirm',
      name: 'confirmTests',
      message: 'Was testing done on your application?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about the testing:',
      when: ({ confirmTests }) => confirmTests
    },
    {
      type: 'confirm',
      name: 'confirmQuestions',
      message: 'Do you have any questions?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide provide your questions:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}
console.log(userQuestions)


// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// // const questions = [
// //   title, 'What is the title of your project?',
// //   description, 'Do you have a Description of your project?'
  
// // ];x

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// let message = "Hello Node";
// console.log(message);

