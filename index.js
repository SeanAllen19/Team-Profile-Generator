const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const team = [];

const addManager = ()=>{

    console.log(`
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             Welcome to Team Profile Creator!
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         Please answer the following question to create 
                your Team Profile website:

    `)
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

    console.log(`
    *************************
    Creating Employee Profile
    *************************
    `);

    return inquirer.prompt([
        {
            
            type:"input",
            name:"name",
            message:"What is the name of the Employee?(Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Employee NAME is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"EmployeeId",
            message:"What is the Employee ID?(Required)",
            validate: EmployeeId => {
                if (EmployeeId) {
                    return true;
                } else {
                    console.log('Employee ID is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"email",
            message:"what is the Employee email address?",
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
    ]).then (EmployeeInput => {
        console.log(EmployeeInput);
        const newEmployee = new Employee (EmployeeInput.name, EmployeeInput.EmployeeId, EmployeeInput.email, EmployeeInput.officeNumber);
        team.push(newEmployee);
        console.log(team)
        getPrompt();
    })}

const promptEngineer = () => {

    console.log(`
    *************************
    Creating Engineer Profile
    *************************
    `);

    return inquirer.prompt([
        {
            
            type:"input",
            name:"name",
            message:"What is the name of the Engineer?(Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Engineer NAME is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"EngineerId",
            message:"What is the Engineer ID?(Required)",
            validate: EngineerId => {
                if (EngineerId) {
                    return true;
                } else {
                    console.log('Engineer ID is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"email",
            message:"what is the Engineer email address?",
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
            name:"github",
            message:"What is your Github username?",
            
        },
    ]).then (EngineerInput => {
        console.log(EngineerInput);
        const newEngineer = new Engineer (EngineerInput.name, EngineerInput.EngineerId, EngineerInput.email, EngineerInput.github);
        team.push(newEngineer);
        console.log(team)
        getPrompt();
    })}

const promptIntern = () => {

    console.log(`
    *************************
    Creating Intern Profile
    *************************
    `);

    return inquirer.prompt([
        {
            
            type:"input",
            name:"name",
            message:"What is the name of the Intern?(Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Intern NAME is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"InternId",
            message:"What is the Intern ID?(Required)",
            validate: InternId => {
                if (InternId) {
                    return true;
                } else {
                    console.log('Intern ID is required')
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"email",
            message:"what is the Intern email address?",
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
            name:"school",
            message:"What is the name of your school?",
            
        },
    ]).then (InternInput => {
        console.log(InternInput);
        const newIntern = new Intern (InternInput.name, InternInput.InternId, InternInput.email, InternInput.school);
        team.push(newIntern);
        console.log(team)
        getPrompt();
    })}

const buildTeam = () => {
   console.log(`
        *************************
        #########################
            CONGRADULATIONS
        #########################
        *************************

   You have successfully created your
            TEAM PROFILE!
    --------------------------------

    Please open you're new HTML file 
            to your browser.
   `)
   console.log(team)
} ;










    addManager();

