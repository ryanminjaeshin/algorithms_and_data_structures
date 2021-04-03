var checkInclusion = function(s1, s2) {

    let map = {},
        start = 0,
        matched = 0;

    for (let i = 0; i < s1.length; i ++) {
        let char = s1[i];
        if(!(char in map)) map[char] = 0;
        map[char] ++;
    }

    for (let end = 0; end < s2.length; end ++) {

        let right = s2[end];

        if (right in map) {
            map[right] --;
            if (map[right] === 0) matched ++;
        }

        if (matched === Object.keys(map).length) return true;

        if (end >= s1.length - 1) {
            let left = s2[start];
            start ++;
            if(left in map) {
                if (map[left] === 0) matched --;
                map[left] ++;
            }
        }
    }
    return false;
};