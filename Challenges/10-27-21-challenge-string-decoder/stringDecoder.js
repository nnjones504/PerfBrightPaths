/** @format */

const decoder = (code) => {
	let i = 0;
	code = code.split("");
	let str = [];
	while (i < code.length) {
		if (code[i].match(/^[0-9]*$/)) {
			i += Number(code[i]);
		} else {
			str.push(code[i]);
		}
		i+=1;
	}
  return str.join("")
};

console.log(decoder("0y4akjfes"));
