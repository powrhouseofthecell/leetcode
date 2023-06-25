const twoSum = (nums: number[], target: number) => {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[target - nums[i]] != undefined) {
      return [hashTable[target - nums[i]], i];
    }
    hashTable[nums[i]] = i;
  }
};

console.log(twoSum([4, 22, 3, 2], 7));
