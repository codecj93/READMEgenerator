// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

  {
    type: 'input',
    name: 'motivation',
    message: 'What is your motivation?',
  },
  {
    type: 'input',
    name: 'why',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'standout',
    message: 'What makes your project stand out?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Insert link to screenshots.',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any collaborators',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, (err) =>
    err ? console.log(err) : console.log('Successfully created readme!')
  );
}


function init() {
  console.log('Starting CLI App...');
  inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers);
  
      const data = generateMarkdown(answers)
      writeToFile(data)
    });


}
// Function call to initialize app
init();






// const readmePageContent = generateMarkdown(answers);