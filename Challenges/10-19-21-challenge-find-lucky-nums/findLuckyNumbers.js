/** @format */

// Write your code below this line.

function luckyNums(num) {
	let nums = [];
	let count = 0;
	while (count <= num) {
		nums.push(Math.floor(Math.random() * 10 + 1));
		count += 1;
	}
	return nums;
}
console.log(luckyNums(6));