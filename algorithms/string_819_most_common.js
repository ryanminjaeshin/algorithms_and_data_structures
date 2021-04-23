/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/\W+/);
    let map = new Map();
    let set = new Set(banned);
    let res = '';
    let max = -Infinity;
    for (let w of words) {
        if (set.has(w)) continue;
        if(!map[w]) map[w] = 0;
        map[w] ++
        if (map[w] > max) {
            res = w;
            max = map[w];
        }
    }
    return res;
    
};