//Constants/Dependencies
const inquirer = require('inquirer');
const view = require('./viewAllDept');

//Inquirer Prompt & Questions---------------------------------
function runInquirer() {inquirer
    .prompt([
        {
            type: 'list',
            name: 'chooseAction',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Role', 'Add an Employee', 'Update Employee'],
            default: 'View All Departments',
        },
        {
            type: 'confirm',
            name: 'didYou',
            message: 'Did you do it?',
            when: (answers) => answers.chooseAction === 'View All Roles'
        }
    ])
    .then(function (data) {
        console.log(data);
        view(data);
    })};

    module.exports = runInquirer;