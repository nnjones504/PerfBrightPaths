/** @format */

const outlier = (arr) => {
	let evens = arr.filter((elem) => elem % 2 === 0);
	let odds = arr.filter((elem) => elem % 2 != 0);
	return evens.length > odds.length ? odds : evens;
};

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]));