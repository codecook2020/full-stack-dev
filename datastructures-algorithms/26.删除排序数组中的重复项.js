/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

   let tempCount = 0;
  for (let i = 0; i < nums.length && nums[i];) {

    if (nums[i] === nums[i + 1]) {
      tempCount = tempCount + 1;
      for (let j = i; j < nums.length && nums[j]; j++) {
        nums[j] = nums[j + 1];
      }
  
    } else {
      i++
    }
  }
 
  nums.splice(nums.length-tempCount, tempCount);
  return nums.length - tempCount;
};

