/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (!digits.length) return []
    let res = [];
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
      };
    
    const helper = (i, s) => {
        if (i == digits.length) {
            res.push(s);
            return;
        }
        for (let char of map[digits[i]]) {
            helper(i + 1, s + char)
        }
    }
    
    helper(0, '');
    return res;
};