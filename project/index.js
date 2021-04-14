const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const employeeArray = [];

function runApp() {
  addMemberQuestion();
  function addMemberQuestion() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "add",
          message: "Which type of team member would you like to add?",
          choices: ["Manager", "Engineer", "Intern", "Finish building my team"],
        },
      ])
      .then((answer) => {
        if (answer.add === "Engineer") {
          engineerQuestions();
        }
        if (answer.add === "Manager") {
          managerQuestions();
        }
        if (answer.add === "Intern") {
          internQuestions();
        }
        if (answer.add === "Finish building my team") {
          buildTeam();
        }
      });
  }

  function managerQuestions() {
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNum
        );
        console.log(manager);
        employeeArray.push(manager);
        console.log(employeeArray);
        addMemberQuestion();
      });
  }

  function engineerQuestions() {
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        console.log(engineer);
        employeeArray.push(engineer);
        console.log(employeeArray);
        addMemberQuestion();
      });
  }

  function internQuestions() {
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        console.log(intern);
        employeeArray.push(intern);
        console.log(employeeArray);
        addMemberQuestion();
      });
  }
  function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(employeeArray), "utf-8");
  }
}

runApp();
