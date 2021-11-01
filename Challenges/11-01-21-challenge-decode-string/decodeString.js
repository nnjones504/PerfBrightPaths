/** @format */

// Write your code below this line

const decode = (str) => {
	const alphabet = "abcdefghijklmnopqrstuvwzyz".split("");
	let decoded = "";
	
	for (let i = 1; i < str.split("").length; i++){
		decoded += alphabet[alphabet.indexOf(str[i]) + Number(str[0])]
	}
	return decoded
};

console.log(decode("2fcjjm"));
