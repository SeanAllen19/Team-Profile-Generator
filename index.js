const inquirer = require('inquirer');
const fs = require('fs');

const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const employee = require("./lib/employee");

const addManager = ()=>{
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of the manager of the team?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the manager employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"what is the manager email address?",
        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is the office number?",
        },
    ])
    .then (managerInput=>{
        console.log(managerInput)
        const {name, ID, email, officeNumber} = managerInput;
        const manager = new Manager (name, ID, email, officeNumber);
        team.push();
        console.log(team)
        console.log(manager);
    })
}
addManager();