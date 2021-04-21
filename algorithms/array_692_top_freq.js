/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    words.sort();
    let map = new Map();
    let tmp = [];
    let res = [];
    for (let i = 0; i < words.length; i ++) {
        let word = words[i];
        if (!(word in map)) map[word] = 0;
        map[word] ++;
    }
    for (let prop in map) {
        tmp.push([prop, map[prop]]);
    }
    tmp.sort((a,b) => b[1] - a[1]);
    
    for (let i = 0; i < k; i ++) {
        res.push(tmp[i][0])
    }
    return res;
};