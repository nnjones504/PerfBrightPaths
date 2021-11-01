/** @format */

// Write your code below this line

const decode = (str) => {
	const alphabet = "abcdefghijklmnopqrstuvwzyz".split("");
	let decoded = "";
	
	for (let i = 1; i < str.split("").length; i++){
    // finds current letter in alphabet and shifts
    decoded += alphabet[alphabet.indexOf(str[i]) + Number(str[0])]
	}
	return decoded
};

console.log(decode("2fcjjm"));
