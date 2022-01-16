const threeSum2 = function (nums) {
   nums.sort(function (a, b) {
      return a - b;
   });
   let ans = [];
   for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) {
         continue;
      }
      let j = i + 1,
         k = nums.length - 1;
      let target = -nums[i];
      while (j < k) {
         if (nums[j] + nums[k] == target) {
            ans.push([nums[i], nums[j], nums[k]]);
            j++;
            k--;
            while (j < k && nums[j] == nums[j - 1]) j++;
            while (j < k && nums[k] == nums[k + 1]) k--;
         } else if (nums[j] + nums[k] > target) {
            k--;
         } else {
            j++;
         }
      }
   }
   return ans;
};
