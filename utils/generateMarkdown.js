// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  - [Screenshots] (#screenshots)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}
 
  ## technologies:
  ${data.technologies}

  ## Contribution:
  ${data.contributing}

  ## Tests:
  ${data.tests}

  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Repo: [${data.repo}](https://github.com/AugustusXI/${data.repo})
  - Email: ${data.email} 

  ## Screenshots:
  ![Screenshot] (${data.screenshot})
  `;
}

module.exports = generateMarkdown;
