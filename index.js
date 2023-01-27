const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const team = [];

const addManager = ()=>{
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the name of the manager of the team?(Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('MANAGER NAME is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"managerId",
            message:"What is the manager employee ID?(Required)",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('MANAGER ID is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"email",
            message:"what is the manager email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('EMAIL is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is the office number?",
            
        },
    ]).then (managerInput=>{
        console.log(managerInput)
        const manager = new Manager (managerInput.name, managerInput.managerId, managerInput.email, managerInput.officeNumber);
        team.push(manager);
        getPrompt();
    })}

const getPrompt = () => {
    return inquirer.prompt([ 
            {
                type: 'list',
                name: 'menu',
                message: "Please select an option",
                choices: ['Add Employee', 'Add Engineer', 'Add Intern', 'Complete Team Profile Generator']

        }
    ]).then(userChoice => {
            switch(userChoice.menu) {
                case 'Add Employee': 
                    promptEmployee();
                    break;
                case 'Add Engineer' :
                    promptEngineer();
                    break;
               case 'Add Intern': 
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
    })}


const promptEmployee = () => {
    console.log("this is employee prompt")
} ;

const promptEngineer = () => {
    console.log("Engineer prompt")
} ;

const promptIntern = () => {
    console.log("Intern prompt")
} ;

const buildTeam = () => {
   console.log("building team prompt")
   console.log(team)
} ;










    addManager();

