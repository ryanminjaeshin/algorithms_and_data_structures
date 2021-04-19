/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const reverse = string => {
        return string.split('').reverse().join('');
    }
    let res = [];
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i ++) {
        let reversed = reverse(arr[i]);
        res.push(reversed);
    }
    return res.join(' ');
};