var search = function(nums, target) {
  let l = 0,
      r = nums.length - 1;

  while (l <= r) {
      let mid = Math.floor((l + r)/2);

      if (nums[mid] === target) {
          return mid;
      }

      // leftside is sorted
      if (nums[l] <= nums[mid]) {
          if (nums[l] <= target && target <= nums[mid]) {
              // target is in left
              r = mid - 1;
          } else {
              // target isin right
              l = mid + 1;
          }
      } else {
          if (nums[mid] <= target && target <= nums[r]) {
              // target is in right
              l = mid + 1;
          } else {
              r = mid - 1;
          }
      }
  }

  return -1;
};