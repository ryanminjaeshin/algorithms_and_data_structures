// amazon
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let len = digits.length - 1;
    for (let i = len; i >= 0; i--) {
        digits[i] = digits[i] + 1;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits
        }
    }
    digits.unshift(1);
    return digits;
};