const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const render = require("./src/page-template.js");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employeeArray = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email address?",
  },
  {
    type: "input",
    name: "officeNum",
    message: "What is the team manager's office number?",
  },
  {
    type: "list",
    name: "add",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Finish building my team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your engineer's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's GitHub username?",
  },
  {
    type: "list",
    name: "add",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Finish building my team"],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your intern's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is your intern's school?",
  },
  {
    type: "list",
    name: "add",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Finish building my team"],
  },
];

function runApp() {
  inquirer.prompt(managerQuestions).then((answer) => {
    switch (answer.add) {
      case "Engineer":
        inquirer.prompt(engineerQuestions);
        break;
      case "Intern":
        inquirer.prompt(internQuestions);
        break;
      default:
        buildTeam();
    }
  });
}

function buildTeam() {
  // Create the output directory if the output path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

runApp();
