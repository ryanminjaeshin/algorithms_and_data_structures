/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    let res = 1;
    let queue = [beginWord];
    let set = new Set(wordList);
    while(queue.length) {
        let next = [];
        for (let word of queue) {
            if(word === endWord) return res;
            for (let i = 0; i < word.length; i ++) {
                for(let j = 0; j < 26; j ++) {
                    let nextWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);
                    
                    if (set.has(nextWord)) {
                        next.push(nextWord);
                        set.delete(nextWord)
                    }
                }
            }
        }
        queue = next;
        res ++;
    }
    return 0;
};

// The time complexity is O(N * M * 26) where
// N = number of words,
// M = length of each word