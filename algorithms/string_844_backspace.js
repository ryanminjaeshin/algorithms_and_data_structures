
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const helper = (string) => {
        let stack = [];
        for (let i = 0; i < string.length; i ++) {
            if (string[i] !== '#') {
                stack.push(string[i]);
            } else {
                stack.pop();
            }
        }
        return stack.join('')
    }
    return helper(s) === helper(t)
};