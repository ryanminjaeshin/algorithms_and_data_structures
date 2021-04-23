/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let stack = [],
        map = new Map(),
        res = [];
    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num)
        }
        stack.push(num);
    }
    for (let num of nums1) {
        res.push(map.get(num) || -1);
    }
    return res;
};