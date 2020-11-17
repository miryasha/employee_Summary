const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const employeesArray = [];

function addManager() {
      inquirer.prompt([
          {
              type: "input",
              message: "What is the Manager's name?",
              name: "name"
          },
          {
              type: "input",
              message: "What is the Manager's ID?",
              name: "id"
          },
          {
              type: "input",
              message: "What is the Manager's email address?",
              name: "email"
          },
          {
              type: "input",
              message: "What is the Manager's office number?",
              name: "officeNumber"
          }
      ]).then(managerInfo => {
          employeesArray.push(new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber))
          addEmployee();
      })
  }
  
 function addEmployee(){}
 function addEngineer(){}
 function addIntern(){}
 function employeeSelector(){}

// Function to start the app
function init() {
      addManager();
  }
  
  init();