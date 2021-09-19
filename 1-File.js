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
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	const a = Object.entries(rules);
	let roman = '';

	for (let i = a.length - 1; i >= 0; i--) {
		if (num >= a[i][1]) {
			// console.log('found the starting point ' + a[i]);
			// break;
			const value = a[[i][0]][1];
			console.log(value);
			if (num === a[i][1]) {
				// look at this
				return Object.keys(rules).find(key => rules[key] === value);
			} else {
				// worst approach ig
				// subtract value from num and mvoe up from the rules
				num -= value;
				console.log(num);

				// 90 - 50 === 40  ( print 50's L)
				//		 40 - 50 < 0 so, move ahead
				// 40 - 10 === 30 ( print 10's X)
				// 		 30  - 10 > 0 continue
				// 30 - 10 === 20 ( print 10's X)
				// 		 20  - 10 > 0 continue
				// 20 - 10 === 10 ( print 10's X)
				// 		 10  - 10 = 0 continue --> now it == 0 so stop

				// 30 -
			}
		}
	}
};
console.log(intToRoman(90));

// ! part 2
// how can i get 90 from here.
