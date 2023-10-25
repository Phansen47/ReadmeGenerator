const inquirer = require('inquirer');
const fs = require('fs');

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

// Function to generate the README.md file
function generateReadme(answers) {
  // Create the content of the README
  const readmeContent = `
# ${answers.title}

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
This application is covered under the ${answers.license} license. [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

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

inquirer.prompt(questions).then(generateReadme);
