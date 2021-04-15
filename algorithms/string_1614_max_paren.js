/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let res = 0,
        cur = 0;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === '(') res = Math.max(res, ++cur);
        if (s[i] === ')') cur --;
    }
    return res;
};