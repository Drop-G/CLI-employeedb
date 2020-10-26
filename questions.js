const inquirer = require(inquirer);

function startPrompt() {
  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: ["View All Employees?", "View All Employee's By Roles?", "View all Emplyees By Deparments", "Update Employee", "Add Employee?", "Add Role?", "Add Department?"]
    }
  ]).then(response => response.option)
};
function addEmployee() { 
  return inquirer.prompt([
       {
         name: "firstname",
         type: "input",
         message: "Enter their first name "
       },
       {
         name: "lastname",
         type: "input",
         message: "Enter their last name "
       },
       {
         name: "role",
         type: "list",
         message: "What is their role? ",
         choices: selectRole()
       },
       {
           name: "choice",
           type: "rawlist",
           message: "Whats their managers name?",
           choices: selectManager()
       }
      ]).then(response => response.option)
    };




