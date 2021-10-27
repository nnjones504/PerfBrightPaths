/** @format */

const best = (arr) => {
	let profit = 0;
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		} else if (arr[i] - min > profit) {
			profit = arr[i] - min;
		}
	}
	return profit;
};

console.log(best([15, 10, 20, 22, 1, 9]));
