const template = require('./src/template')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

  
// Below is the first section of data that will allow user to generate author, title, and email.
const userQuestions = () => {
  console.log(`
  ====================
  Add Your Information
  ====================
  `);
  return inquirer.prompt([
      {
          type: 'input',
          name: 'author',
          message: 'Who is the Author of this repository? (Required)',
          validate: authorInput => {
              if (authorInput) {
                  return true;
              } else {
                  console.log('Please enter an Author!');
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username? (Required)',
        validate: authorInput => {
            if (authorInput) {
                return true;
            } else {
                console.log('Please enter a valid username!');
                return false;
            }
        }
    },
      {
          type: 'input',
          name: 'title',
          message: 'Enter a title! (Required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log('Please enter a title!');
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter an email address! (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
  ]);
};
console.log(userQuestions)


//below contains user input section to provide data for the readMe
const userPrompt = repoData => {
  console.log(`
  ==================================
  Add Information About This Project
  ==================================
  `);
  //below creates an project array if one is not present
  if (!repoData.project) {
    repoData.project = {};
  }
  //next series of questions for user
  
  return inquirer.prompt([
    { type: 'input',
      name: 'description',
      message: 'Please provide a description of your project!(Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        }else {
          console.log('Please provide a description');
          return false;
        }
      },
      type: 'input',
      name: 'table of contents',
      message: 'Please provide a table of content section',
      validate: tableInput => {
        if (tableInput) {
          return true;
        }else {
          console.log('Please provide a table of contents');
          return false;
        }
      },
       type: 'input',
      name: 'installation',
      message: 'Please provide information about installation',
      validate: installInput => {
        if (installInput) {
          return true;
        }else {
          console.log('Please provide a description');
          return false;
        }
      },
       type: 'input',
      name: 'usage',
      message: 'Please provide information about usage!(Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        }else {
          console.log('Please provide a usage');
          return false;
        }
      },
       type: 'input',
      name: 'license',
      message: 'Please provide a license for your project!',
      choices: ['MIT', 'Apache', 'GNU' ],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        }else {
          console.log('Please provide a description');
          return false;
        }
      },
       type: 'input',
      name: 'contributor',
      message: 'Would you like to add a contributor?',
      validate:  contributeInput => {
        if (contributeInput) {
          return true;
        }else {
          console.log('Please enter a contributor');
          return false;
        }
      },
       type: 'input',
      name: 'test',
      message: 'Was testing provided for your project?',
      validate: testInput => {
        if (testInput) {
          return true;
        }else {
          console.log('Please enter testing');
          return false;
        }
      },
       type: 'input',
      name: 'questions',
      message: 'Would you like to provide any additional questions?',
      validate: questionInput => {
        if (questionInput) {
          return true;
        }else {
          console.log('Enter questions please!');
          return false;
        }
      },

  }])
  .then(projectData => {
    repoData.project = projectData;
    return projectData;
  })


}
console.log(generateMarkdown)
userQuestions()
    .then(userPrompt)
    .then(repoData => {
      console.log(repoData);
      return generateMarkdown(repoData);
    })
    .then(readmeMD => {
      return writeFile(readmeMD)
    })
    .then(writeFileResponse => {
      console.log(writefileResponse)
    })
    .catch(err => {
      console.log(err)
    })

  


// // // TODO: Include packages needed for this application

// // // TODO: Create an array of questions for user input
// // // const questions = [
// // //   title, 'What is the title of your project?',
// // //   description, 'Do you have a Description of your project?'
  
// // // ];x

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // // TODO: Create a function to initialize app
// // function init() {}

// // // Function call to initialize app
// // init();

// // let message = "Hello Node";
// // console.log(message);

