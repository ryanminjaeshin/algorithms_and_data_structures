/*

Problem Statement #
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

*/

var threeSum = function(nums) {
	var rtn = [];
	if (nums.length < 3) {
		return rtn;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	for (var i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			return rtn;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (var j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				rtn.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	return rtn;
};

////////////////////////////////////////
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
  var result = [];
  
  var len = nums.length;
  
  if (nums.length < 3) return result;
  
  nums = nums.sort((a, b) => a - b);
  
  for (var i = 0; i < len; i += 1) {
      
      if (nums[i] > 0) return result;
      
      if (i > 0 && nums[i] === nums[i-1]) continue;
      
      for (var left = i + 1, right = len - 1; left < right;) {
          
          if (nums[i] + nums[right] + nums[left] === 0) {
              
              result.push([nums[i], nums[right], nums[left]])
              
              left ++;
              
              right --;
              
              while (left < right && nums[left] === nums[left - 1]) {
                  left ++;
              }
                              
              while (left < right && nums[right] === nums[right + 1]) {
                  right --;
              }
          } else if (nums[i] + nums[left] + nums[right] > 0) {
              
              right --;
              
          } else {
              
              left ++ ;
          } 
      }
  }
  return result;
  
};