/** @format */

// Boilerplate code
const readline = require("readline");

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Welcome the user to the password validator tool
console.log("Welcome to the password validator tool!");

// Prompt the user for a password to validate
reader.question("Enter a password (10 chararcter minimum): ", function (answer) {
		// variables to determine if answer contains special chars and numbers
		let checkSpecChar = /\W/.test(answer);
		let checkNums = /\d/.test(answer);

		// checks length
		if (answer.length >= 10) {
			// checks for numbers
			if (checkSpecChar === true && checkNums === true) {
				console.log("Great password! :)");
			} else if (checkNums === true) {
				console.log("Good password. Try using some special characters too next time.");
			}

			// checks for special chars
			else if (checkSpecChar === true) {
				console.log("Good password. Try using some numbers too next time.");
			}

			// checks for special chars and nums
			else {
				console.log("Decent password. Try using some numbers and special characters next time");
			}
		} else {
			// not long enough
			console.log(`Your password isn't long enough. You need at least ${10 - answer.length} more character(s).`);
		}
		reader.close();
  });


