// Constants/Dependencies ------------------------
const express = require('express');
const app = express();
const mysql = require('mysql2');
const runInquirer = require('./index');
require('dotenv').config();
const PASSWORD = require('./.env')


//Add Env 

console.log(process.env.moose);

// Middleware ------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3001;
//Connect to Database----------------------------
const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: PASSWORD,
		database: 'employee_db'
	},
	console.log(`Connected to the employee_db database.`)
);

// Express Call ------------------------------------
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 

runInquirer();
// module.exports = {
//     example: example,

// }