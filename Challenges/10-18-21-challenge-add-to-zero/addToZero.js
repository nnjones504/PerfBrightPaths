/** @format */

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:

let addToZero = false;
for (let i = 0; i < array.length; i++) {
	for (let x = 0; x < array.length; x++) {
		if (array[i] + array[x] === 0) {
			addToZero = true;
			break;
		}
	}
	if (addToZero === true) {
		break;
	}
}
console.log(addToZero);
