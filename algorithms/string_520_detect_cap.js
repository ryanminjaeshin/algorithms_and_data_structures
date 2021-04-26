var detectCapitalUse = function(word) {
    if (word.length < 2) return true;
    // lowercase
    if (word[0].charCodeAt(0) >= 97) {
        for (let i = 1; i < word.length; i ++) {
            if (word[i].charCodeAt(0) < 97) return false;
        }
    // first uppercase, second lowercase
    } else if (word[0].charCodeAt(0) < 97 && word[1].charCodeAt(0) >= 97) {
        for (let i = 2; i < word.length; i ++) {
            if (word[i].charCodeAt(0) < 97) return false;
        }
    // all uppercase
    } else if (word[0].charCodeAt(0) < 97 && word[1].charCodeAt(0) < 97) {
        for (let i = 2; i < word.length; i ++) {
            if (word[i].charCodeAt(0) >= 97) return false;
        }
    }
    return true;
};