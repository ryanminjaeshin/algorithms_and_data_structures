//https://leetcode.com/problems/group-anagrams/
var groupAnagrams = function(strs) {
    let map = {},
        result = [];
    for (let i = 0; i < strs.length; i ++) {
        let str = strs[i]
        let sorted = str.split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [str]
        } else {
            map[sorted].push(str);
        }
    }

    for (let prop in map) {
        result.push(map[prop])
    }

    return result;
};

var groupAnagrams = function(strs) {
    let res = [],
        map = new Map();
    for (let i = 0; i < strs.length; i ++) {
        let str = strs[i];
        let sorted = str.split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [str];
        } else {
            map[sorted].push(str);
        }
     }
    return Object.values(map)
};

// recap
// recap