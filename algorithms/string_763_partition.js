/**
 * @param {string} S
 * @return {number[]}
 */
 var partitionLabels = function(S) {
    if (!S || !S.length) return null;
    let res = [];
    let lastIndices = new Array(26).fill(0);
    for (let i = 0; i < S.length; i ++) {
        lastIndices[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
    let start = 0;
    let end = 0;
    for (let i = 0; i < S.length; i ++) {
        end = Math.max(end, lastIndices[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if (i == end) {
            res.push(end - start + 1);
            start = end + 1;
        }
    }
    return res;
};