// Constants/Dependencies ------------------------
const mysql = require('mysql2');
require('dotenv').config();
const PASSWORD = process.env.PASSWORD;
const cTable = require("console.table");
const inquirer = require('inquirer');

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

db.connect(err => {if (err) throw err});


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
        console.log('end of inquirer page view departments function is below');
        viewAllDept(data);
    })};
    viewAllDept = function (data) {
        // console.log(data);
        if(data.chooseAction === 'View All Departments') {
            console.log('View All Departments function starting');
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log("hello");
                });
            };
    };
    
runInquirer();