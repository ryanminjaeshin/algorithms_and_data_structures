/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let map = {};
    let res = [];
    for (let i = 0; i < nums.length; i ++) {
        let num = nums[i];
        if (!map[num]) map[num] = [num, 0];
        map[num][1] +=1;
    }
    let temp = Object.values(map).sort((a,b) => b[1]-a[1]).slice(0,k);
    for (let i = 0; i < temp.length; i ++) {
        res.push(temp[i][0])
    }
    return res;
};