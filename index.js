// Intial setting of variables
const inquirer = require('inquirer');
const fs = require('fs');

// Defines a list of questions for the user's input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information: ',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application: ',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Other'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address: ',
  },
];

// function to generate the HTML of the README based on the previous user inputs
function generateReadme(answers) {
  const readmeContent = `
# ${answers.title} [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license. 

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions or additional information, contact [${answers.githubUsername}](https://github.com/${answers.githubUsername}) or email at ${answers.email}.
`;

  fs.writeFileSync('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README.md file generated successfully.');
  });
}

// Defines the inquirer prompts
inquirer.prompt(questions).then(generateReadme);
