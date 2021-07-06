// amazon

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

//

var threeSum = function(nums) {
	nums.sort((a, b) => a - b);
	let triplets = [];
	for (let i = 0; i < nums.length; i ++) {
			if(i > 0 && nums[i] === nums[i - 1]) continue;
			findPair(nums, -nums[i], i + 1, triplets);
	}

	return triplets;
};

const findPair = (arr, target, left, triplets) => {
	let right = arr.length - 1;
	while (left < right) {
			let sum = arr[left] + arr[right];
			if (sum === target) {
					triplets.push([-target, arr[left], arr[right]])
					left += 1;
					right -= 1;
					while (left < right && arr[left] === arr[left - 1]) left += 1;
					while (left < right && arr[right] === arr[right + 1]) right -= 1;
			} else if (sum < target) {
					left += 1;
			} else {
					right -= 1;
			}
	}
}

// recap
// recap

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length; i ++) {
        let left = i+1,
            right = nums.length-1,
            sum = 0;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (nums[left] == nums[left+1]) left ++;
                while (nums[right] == nums[right-1]) right --;
                left ++;
                right --;
            } else if (sum > 0) {
                right --;
            } else {
                left ++
            }
        }
        while (nums[i] == nums[i+1]) i++
    }
    return res;
};

// recap
// recap