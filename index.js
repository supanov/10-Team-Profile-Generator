// Allows to selectively choose which modules we need
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./library/Employee");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
// In the destination file that we want to receive exported function ** rel path must be exact
const generatePage = require("./src/createHTML.js");

const teamArr = [];

function getManagerInfo() {
  const questions = [
    {
      type: "input",
      message: "What is the name of your team manager?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the Manager's office number?",
      name: "number",
    },
    {
      type: "input",
      message: "What is the employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the email address?",
      name: "email",
    },
  ];

  inquirer.prompt(questions).then(function (data) {
    const manager = new Manager(data.name, data.id, data.email, data.number);
    teamArr.push(manager);
    addTeamMember();
  });
}

function addTeamMember() {
  const questions = [
    {
      type: "list",
      message: "Select the following team member you want to add",
      choices: ["Engineer", "Intern", "EXIT"],
      name: "teamMemberTitle",
    },
  ];
  inquirer.prompt(questions).then(function (data) {
    switch (data.teamMemberTitle) {
      case "Engineer":
        getEngineerInfo();
        break;
      case "Intern":
        getInternInfo();

        break;
      default:
        generateTeamManager();
    }
  });
}

function generateTeamManager() {
  console.log(teamArr);
  const teamManager = generatePage(teamArr);
  fs.writeFileSync("./dist/team.html", teamManager);
}

function getInternInfo() {
  const questions = [
    {
      type: "input",
      message: "What is the name of your team intern?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the intern's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the intern's school?",
      name: "school",
    },
  ];

  inquirer.prompt(questions).then(function (data) {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    teamArr.push(intern);
    addTeamMember();
  });
}
function getEngineerInfo() {
  const questions = [
    {
      type: "input",
      message: "What is the name of your team Engineer?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineer's ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineer's github?",
      name: "github",
    },
  ];

  inquirer.prompt(questions).then(function (data) {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamArr.push(engineer);
    addTeamMember();
  });
}

getManagerInfo();