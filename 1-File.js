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

// +=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=+
// Question Number 2

const addTwoNumbers = function (l1, l2) {
   let head = new ListNode(0);
   let cur = head;
   let curry = 0;

   while (true) {
      let sum = curry;
      sum += l1 ? l1.val : 0;
      sum += l2 ? l2.val : 0;
      cur.val = sum % 10;
      curry = parseInt(sum / 10);
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
      if (l1 != null || l2 != null) {
         cur.next = new ListNode(0);
         cur = cur.next;
      } else {
         break;
      }
   }
   if (curry != 0) {
      cur.next = new ListNode(0);
      cur = cur.next;
      cur.val = curry;
   }
   return head;
};

// +=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=++=+=+=+=+
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

const LongestSubstring = function (s) {
   let start = 0;
   let max = 0;
   let visitedCharByPosition = {};

   for (var position = 0; position < s.length; position++) {
      let nextChar = s[position];
      if (
         nextChar in visitedCharByPosition &&
         visitedCharByPosition[nextChar] >= start
      ) {
         start = visitedCharByPosition[nextChar] + 1;
         visitedCharByPosition[nextChar] = position;
      } else {
         visitedCharByPosition[nextChar] = position;

         max = Math.max(max, position + 1 - start);
      }
   }
   return max;
};
