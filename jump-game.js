/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > x) {
      return false;
    }
    x = Math.max(x, i + nums[i]);
    if (x >= nums.length - 1) {
      return true;
    }
  }

  return false;
};

console.log(canJump([2, 1, 1, 1, 4]));