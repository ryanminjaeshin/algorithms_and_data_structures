var validPalindrome = function(s) {
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left , right -1)
        }
        left ++;
        right --
    }
    return true;
};

const isPalindrome = (s, i ,j) => {
    let left = i,
        right = j;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}