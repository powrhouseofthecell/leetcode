// Question number 1;
const twoSum = function (nums, target) {
	// from the nums array return indicies of two numbers who sum is target. Assume each input has unique solution

	// for (let i = 0; i < nums.length; i++) {
	// 	if (nums[i] + nums[i + 1] === target) {
	// 		return [i, i + 1];
	// 	}
	// }

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			// i and j are indicies
			if (nums[i] + nums[j] === target) return [i, j];
		}
	}
};

/////////////////////////////////////////////////////////////////////////////

// Question 7 ( Reverse an integer )
// 321  --> 123
// -123  --> -321
// 120  --> 21

//1: Reverse a number

const reverse = function (x) {
	const arr = Array.from(String(x)); // this is the array.
	// reverse the whole array if array[0] is not '-'
	// else reverse upto array[1]

	let res = [];

	if (arr[0] === '-') {
		res.push('-');
		for (let i = arr.length - 1; i > 0; i--) {
			res.push(arr[i]);
		}
	} else {
		for (let i = arr.length - 1; i >= 0; i--) {
			res.push(arr[i]);
		}
	}
	// console.log(res);
	// convert string items in the array to numbers
	let res2 = '';
	for (let i = 0; i < res.length; i++) {
		res2 += res[i];
	}
	if (res2 > Math.pow(-2, 31) && res2 < Math.pow(2, 31) - 1) return res2;
	else return 0;
};

/////////////////////////////////////////////////////////////////////////////

// Integer to roman
// Question 12
// I    1
// V    5
// X    10
// L    50
// C    100
// D    500
// M    1000

var intToRoman = function (num) {
	const rules = {
		1: 'I',
		5: 'V',
		10: 'X',
		50: 'L',
		100: 'C',
		500: 'D',
		1000: 'M',
	};

	const arr = Object.keys(rules);
	console.log(arr);
	let i = 0;
	while (arr[i] < num) {
		i++;
	}
	const idxNext = i;
	console.log(idxNext);
	console.log(arr[idxNext], arr[idxNext] - num);
	const roman = [arr[idxNext], arr[idxNext] - num];
	console.log(roman);
	console.log(rules[roman[0]], rules[1]);

	// let res = arr[idxNext] - arr[idxNext] - 100;
	// console.log(Math.abs(res));
};
console.log(intToRoman(900));
