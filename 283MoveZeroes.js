// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[i + 1];
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
