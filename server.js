// Constants/Dependencies ------------------------
const express = require('express');
const app = express();
const PORT =process.env.PORT||3001;
const mysql = require('mysql2');


// Middleware ------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to Database----------------------------
const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'Arianrhod2314!',
		database: 'employee_db'
	},
	console.log(`Connected to the employee_db database.`)
);

// Express Call ------------------------------------
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 