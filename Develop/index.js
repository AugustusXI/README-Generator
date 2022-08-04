// TODO: Incnode n
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Give your project a title.",
    default: "",
    validate: (titleCapture) => {
      if (titleCapture) {
        return true;
      } else {
        console.log("You need to enter a project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project: ",
    default: "",
  },
  {
    type: "input",
    name: "installation",
    message: "Walkthrough how installation works.",
    default: "",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain how the appliation is used.",
    default: "",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    default: "",
  },
  {
    type: "input",
    name: "tests",
    message: "How to test your project",
    default: "",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license",
    choices: ["MIT", "GNU", "Apache 2.0", "ISC"],
    default: "",
  },
  {
    type: "checkbox",
    name: "technologies",
    message:
      "Please select the technologies that your application was built with.",
    choices: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "jQuery",
      "Node.js",
      "Express.js",
    ],
  },

  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
    validate: (githubCapture) => {
      if (githubCapture) {
        return true;
      } else {
        console.log("Enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "repo",
    message: "Enter your GitHub repo name.",
    default: "",
    validate: (repoCapture) => {
      if (repoCapture) {
        return true;
      } else {
        console.log("Enter your GitHub repo name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email.",
    default: "",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Provide a link to your screenshot",
    default: "",
  },
];

// TODO: Create a function to write README file
function writeToFile(data, fileName) {
  return fs.writeFile(`./dist/${fileName}`, data, (err) => {
    if (err) {
      throw err;
    }
    console.log("README is complete!");
  });
}
// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions).then((readmeData) => {
    return readmeData;
  });
};

// Function call to initialize app
init()
  .then((readmeData) => {
    let markdownData = generateMarkdown(readmeData);
    return writeToFile(markdownData, "README.md");
  })
  .catch((err) => {
    console.log(err);
  });
