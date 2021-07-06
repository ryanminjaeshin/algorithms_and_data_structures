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

var search = function(nums, target) {
    if (nums == null || nums.length === 0) return -1;

    let l = 0,
        r = nums.length - 1;

    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[r] < nums[m]) l = m + 1;
        else r = m;
    }

    let start = l;
    l = 0;
    r = nums.length - 1;


    if (target >= nums[start] && target <= nums[r]) {
        l = start;
    } else {
        r = start;
    }

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            return m;
        } else if (nums[m] < target) {
            l = m  + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
};

// recap
// recap
// recap