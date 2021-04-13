const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function runApp() {
  inquirer.prompt([
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
      name: "number",
      message: "What is the team manager's office number?",
    },
    {
      type: "list",
      name: "next",
      message: "Which type of team member would you like to add?",
      choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
    },
  ]);

  function engineerInfo() {
    prompts.next([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
      },
      {
        type: "list",
        name: "next",
        message: "Which type of team member would you like to add?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish building my team",
        ],
      },
    ]);
  };

  function internInfo() {
    prompts.next([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is your intern's school?",
      },
      {
        type: "list",
        name: "next",
        message: "Which type of team member would you like to add?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish building my team",
        ],
      },
    ]);

  if (next === "Add an Engineer") {
    engineerInfo();
  } else if (next === "Add an Intern") {
    internInfo();
  }

  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
}

runApp();
