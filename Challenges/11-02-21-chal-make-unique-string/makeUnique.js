// Write your solution below:
const makeUnique = str => [...new Set(str)].join("")

console.log(makeUnique("helloworld"));

// the instructions said to use a loop and conditional so here is the loop and conditional method
const makeUnique2 = (str) => {
	str = str.split("");
	let newStr = [];
	for (let i = 0; i < str.length; i++) {
		if (!newStr.includes(str[i])) {
			newStr.push(str[i]);
		}
	}
	return newStr.join("");
};

console.log(makeUnique2("iwanttoclimbamountain"));