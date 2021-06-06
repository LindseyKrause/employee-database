// Constants/Dependencies ------------------------
const mysql = require('mysql2');
const runInquirer = require('./index');
require('dotenv').config();
const PASSWORD = process.env.PASSWORD;


//Add Env 
console.log(process.env.moose);

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

db.connect(err => {if (err) throw err;})

runInquirer();
// module.exports = {
//     example: example,

// }