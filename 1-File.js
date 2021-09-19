// Question number 1;
const twoSum = function(nums, target) {
    // from the nums array return indicies of two numbers who sum is target. Assume each input has unique solution

    for (let i = 0; i < nums.length; i++)  {
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1]
        }
    }
}
