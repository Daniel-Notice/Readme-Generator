// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${data.license}
## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Usage](#usage)
* [Contact-Me](#contact-me)
* [Contributors](#contributors)
* [Testing](#testing)
${data.license}
## Description
${data.description}
## Requirements
${data.require}
## Installation 
${data.install}
## Usage
${data.usage}
## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* Github - [${data.creator}](https://github.com/${data.creator})
## Contributors
${data.contributors}
## Testing
${data.test} 
${data.license}
`;
}

module.exports = generateMarkdown;
