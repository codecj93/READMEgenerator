// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  let badge
  if (license === 'Apache' || license === 'GPL' || license === 'MIT') {
    badge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link
  if (license === 'Apache' || license === 'GPL' || license === 'MIT') {
    link = `https://opensource.org/license/${license}`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licensesection = `## License
  ## License

This project is licensed under the ${license} license. Click the badge below for more details:

${licenseBadge}

For more information, please see the ${licenseLink}.
`;

  if (license === 'Apache' || license === 'GPL' || license === 'MIT') {
  return licensesection
  } else
  return ''
};


// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

  return `

  # README Generator

## Description
${data.motivation}
${data.why}
${data.problem}
${data.learn}
${data.standout}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
` ;
};
  
//     const licenseBadge = renderLicenseBadge(license);
//     const licenseLink = renderLicenseLink(license);
//     const title = 'README Generator'

//     const READMEContent = `
// # README Generator

// ## Description
// ${answers.motivation}
//       ${answers.why}
//       ${answers.problem}
//       ${answers.learn}
//       ${answers.standout}

// ## Table of Contents

// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)

// ## Installation

// ${answers.installation}

// ## Usage

// ${answers.usage}

// ${renderLicenseSection(license)}
// `;

//     return READMEContent;
//   }



  module.exports = generateMarkdown;
