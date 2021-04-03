var minWindow = function(s, t) {
    let map = {},
        start = 0,
        matched = 0,
        minLength = Infinity,
        substrStart = 0;
    for (let i = 0; i < t.length; i ++) {
        let char = t[i];
        if(!(char in map)) map[char] = 0;
        map[char] ++;
    }
    
    for (let end = 0; end < s.length; end ++) {
        let right = s[end];
        if (right in map) {
            map[right] --;
            if (map[right] >= 0) matched ++
        }
        while (matched === t.length) {
            if (minLength > end - start + 1) {
                minLength = end - start + 1;
                substrStart = start
            }
            let left = s[start]
            start ++;
            if (left in map) {
                if (map[left] === 0) matched --;
                map[left] ++;
            }
        }     
    }
    
    return minLength > s.length ? '' : s.substring(substrStart, substrStart + minLength);
};