// Constants/Dependencies ------------------------
const mysql = require('mysql2');
require('dotenv').config();
const PASSWORD = process.env.PASSWORD;
const cTable = require('console.table');
const inquirer = require('inquirer');
const chalk = require('chalk');
const log = console.log;

// Connect to Database----------------------------
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: PASSWORD,
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

db.connect(err => { if (err) throw err });

runInquirer();

//Inquirer Prompt & Questions---------------------------------
function runInquirer() {
    log(chalk.bgMagentaBright(`
    ***********************************************************
    --------------------Employee Tracker!----------------------
    ***********************************************************`));
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'chooseAction',
                message: 'What would you like to do?',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update Employee'],
            },
        ])
        .then((answers) => {
            switch (answers.chooseAction) {
                case 'View All Departments':
                    viewDepartment();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add a Department':
                    addFunctions();
                    break;
                case 'Add a Role':
                    addFunctions();
                    break;
                case 'Add an Employee':
                    addFunctions();
                    break;
                case 'Update Employee':
                    updateEmployee();
                    break;
            }
        });
};

// Add Functions (Crud: Create)-----------------------
function addFunctions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'chooseAddOption',
                message: 'What would you like to do?',
                choices: [
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                ]
            },
        ])
        .then((answers) => {
            switch (answers.chooseAddOption) {
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
            }
        });
};
//-------Add Department
function addDepartment() {
    console.log; ("add department started");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'inputDeptName',
                message: 'What would you like to call your department?',
            },
        ])
        .then((answers) => {
            const deptName = [answers.inputDeptName];

            db.query(`INSERT INTO department (department_name) VALUES (?)`, deptName, (err, results) => {
                if (err) {
                    console.log(err);
                }
                log(chalk.greenBright("Success! Department Added!"));
                log(chalk.magentaBright("Press Down Arrow to go back to main menu"));

            });
            runInquirer();
        });
};
//-------Add Roles
function addRole() {
    console.log; ("add role started");
    // let allDepts = [];
    // const getAllDepts = db.query("SELECT * FROM department", (err, results) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     for (let i = 0; i < results.length; i++) {
    //         allDepts.push({ name: results[i].department_name, value: results[i].id });;
    //     }
    // });

    // inquirer
    //     .prompt([
    //         {
    //             type: 'input',
    //             name: 'inputTitle',
    //             message: 'What is the title of the new role called?',
    //         },
    //         {
    //             type: 'integer',
    //             name: 'inputSalary',
    //             message: 'What is the salary of the new role?',
    //         },
    //         {
    //             type: 'list',
    //             name: 'inputDepartment',
    //             message: 'What is the department that this role belongs to?',
    //             choices: allDepts,
    //         },
    //     ])
    //     .then((answers) => {
    //         const rTitle = answers.inputTitle;
    //         const rSalary = parseInt(answers.inputSalary);
    //         const deptInput = parseInt(answers.inputDepartment);
    //         const query = `INSERT INTO roles (title, salary, department_id) VALUES (${rTitle}, ${rSalary}, ${deptInput})`;

    //         db.query(query, (err, results) => {
    //             if (err) throw err;
    //             log(chalk.greenBright("Success! Role Added!"));
    //             log(chalk.magentaBright("Press Down Arrow to go back to main menu"));

    //         });
    //         runInquirer();
    //     });
};

//-------Add Employee
function addEmployee() {
    console.log("add employee started");
};

// View Functions (Crud: Read)-----------------------
//-------View Departments
function viewDepartment() {
    console.log("start view departments");
    db.query(`SELECT * FROM department`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        log(chalk.magentaBright("Press Down Arrow to go back to main menu"));

    });
    runInquirer();
};

//-------View Roles
function viewRoles() {
    console.log("start view roles");
    db.query(`SELECT * FROM roles`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        log(chalk.magentaBright("Press Down Arrow to go back to main menu"));
    });
    runInquirer();
};
// //-------View Employees
function viewEmployees() {
    console.log("start view employees");
    db.query(`SELECT * FROM employee`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
        log(chalk.magentaBright("Press Down Arrow to go back to main menu"));
    });
    runInquirer();
};

// Update Functions (Crud: Update)-----------------------
//-------Update Employee
function updateEmployee() {
    console.log("update employee started");
};

// Delete Functions (Crud: Delete)-----------------------

