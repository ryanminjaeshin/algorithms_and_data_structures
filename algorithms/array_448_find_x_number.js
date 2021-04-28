/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    // [1,2,2,3,3,4,7,8]
    let res = [];
    let len = nums.length;
    let set = new Set(nums) // [1,2,3,4,7,8];
    for (let i = 1; i <= len; i ++) {
        if(!set.has(i)) res.push(i)
    }
    return res;
};