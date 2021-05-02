/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    let hLen = haystack.length;
    let nLen = needle.length;
    for (let i = 0; i < hLen - nLen + 1; i ++) {
        if (haystack[i] == needle[0]) {
            for (let j = 0; j < nLen; j ++) {
                if (needle[j] !== haystack[i + j]) {
                    break;
                } else if (j == nLen - 1) {
                    return i
                }
            }
        }
    }
    return -1;
};