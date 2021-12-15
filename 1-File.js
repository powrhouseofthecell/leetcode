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
