// TODO: Include packages needed for this application


const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')
const path = require('path')




// TODO: Create an array of questions for user input
const questions = [

 
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub Username? (Required)',

  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your projects name? (Required)',

  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter an email address! (Required)',


  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project!(Required)',

  },

  {
    type: 'input',
    name: 'installation',
    message: 'Please provide information about installation',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide information about usage!(Required)',

  },
  {
    type: 'list',
    name: 'license',
    message: 'Please provide a license for your project!',
    choices: ['MIT', 'Apache', 'GNU'],
  },
{
    type: 'input',
    name: 'contributor',
    message: 'Would you like to add a contributor?',

  },
  {
    type: 'input',
    name: 'test',
    message: 'Was testing provided for your project?',
    default: 'npm test',


  }



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() { 
  inquirer.prompt(questions).then(userResponse => {
    writeToFile('README.md', generateMarkdown({...userResponse}));
  });
 }

// Function call to initialize app
init();




