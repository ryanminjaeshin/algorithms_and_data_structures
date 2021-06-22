// amazon, atoi
var myAtoi = function(s) {
    let i = 0,
        num = 0,
        sign = 1,
        max = 2**31 - 1,
        min = 2**31 * -1;
    s = s.trim();
    if (s[i]=='-' || s[i]=='+') {
        sign = s[i]=='-'?-1:1;
        i++
    }
    while (s[i] && s[i].charCodeAt(0) - 48 >= 0 && s[i].charCodeAt(0) - 48 <= 9) {
        num = num * 10 + (s[i].charCodeAt(0) - 48);
        i ++
    }
    num = num * sign;
    return num <= min ? min : num >= max ? max : num;
};
// recap