//Constants/Dependencies

inquirer
	.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name?'
		},
		// {
		// 	type: 'list',
		// 	message: 'What is your preferred method of communication?',
		// 	name: 'contact',
		// 	choices: ['email', 'phone', 'Slack', 'smoke signal']
		// },
		// {
		// 	type: 'checkbox',
		// 	message: 'What languages do you know?',
		// 	name: 'stack',
		// 	choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
		// }
	])