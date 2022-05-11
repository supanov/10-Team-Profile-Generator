const fs = require("fs")
const inquirer = require("inquirer")

const Employee = require ("./library/Employee")
const Manager = require ("./library/Manager")
const Enginner = require ("./library/Engineer")
const Intern =require ('./library/Intern')

const generatePage = require("./src/html")
const team = [];

// prompt

function managerInfo() {
    const questions = [
        {
            type:"input",
            message: "What is the name of the team manager?",
            name:"name"
        },
        {
            type: "input",
            message: "What is the Manager's office number?",
            name: "number",
        },
        {
            type: "input",
            message: "What is the employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee email adress?",
            name: "email"
        },
    
    ];
}

// inquire.prompt

