/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    s.replace(/\s/g, '');
    let res = [];
    let num = '';
    let prev = "+";
    for (let i = 0; i < s.length; i ++) {
        // if it is digit, we concat to num string
        if (!isNaN(s[i])) num += s[i];
        
        // if it is operator
        if (isNaN(s[i]) || i == s.length - 1) {
            if (prev == "+") {
                res.push(Number(num))
            } else if (prev == '-') {
                res.push(Number(-num))
            } else if (prev == '*') {
                res.push(Math.floor(res.pop() * Number(num)))
            } else if (prev == '/') {
                res.push(Math.trunc(res.pop() / Number(num)))
            }
            prev = s[i];
            num = '';
        }
    }
        return res.reduce((a, b) => a + b)
};