// Write your solution below:
const makeUnique = str => {
  str = new Set(str);
  return [...str].join("")
}

console.log(makeUnique("helloworld"));

// the instructions said to use a loop and conditional so here is the loop and conditional method
const makeUnique2 = (str) => {
	str = str.split("");
	let newStr = [];
	let i = 0;
	while (i < str.length) {
		if (!newStr.includes(str[i])) {
			newStr.push(str[i]);
		}
    i++;
	}
	return newStr.join("");
};

console.log(makeUnique2("iwanttoclimbamountain"));