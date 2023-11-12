/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let pointer_one = 0;
  let pointer_two = nums.length - 1;
  let results = [];
  while (pointer_one < pointer_two) {
      const i = nums[pointer_one];
      const j = nums[pointer_two];
      // if (i == j) {

      // }
      const result = nums.find((e, index) => i + j + e == 0 && index != pointer_one && index != pointer_two);
      if (result) {
          results.push([i,j,result]);
      }
      pointer_one++
      pointer_two--
  }
  console.log(results);
};

console.log(threeSum([-1,0,1,2,-1,-4]));