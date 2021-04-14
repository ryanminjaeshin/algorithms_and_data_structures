/**
 * @param {string} palindrome
 * @return {string}
 */
 var breakPalindrome = function(palindrome) {
    if (palindrome.length < 2) return '';
    let len = palindrome.length;
    let palindromeArr = palindrome.split('');
    for (let i = 0; i < Math.floor(len / 2); i ++) {
        let c = palindromeArr[i];
        if (c !== 'a') {
            palindromeArr[i] = 'a';
            return palindromeArr.join('');
        }
    }
    palindromeArr[len - 1] = 'b';
    return palindromeArr.join('');
};