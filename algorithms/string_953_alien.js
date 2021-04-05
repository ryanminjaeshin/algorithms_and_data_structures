var isAlienSorted = function(words, order) {
    let map = {};
    for (let i = 0; i < order.length; i ++) {
        map[order.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
    for (let i = 1; i < words.length; i ++) {
        if (compare(words[i-1], words[i], map) > 0) return false;
    }
    return true;
}

const compare = (w1, w2, map) => {
    let i = 0;
    let j = 0;
    let compareVal = 0;

    while(i < w1.length && j < w2.length && compareVal === 0) {
        compareVal = map[w1.charCodeAt(i) - 'a'.charCodeAt(0)] 
        i ++
        j ++
    }
    if (compareVal === 0) {
        return w1.length - w2.length;
    } else {
        return compareVal;
    }
}