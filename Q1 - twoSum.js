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
