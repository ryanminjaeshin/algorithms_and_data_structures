var isHappy = function(n) {
    let set = new Set();
    while (n !== 1) {
        let current = n;
        let sum = 0;
        while (current !== 0) {
            sum += (current % 10) ** 2
            current = Math.floor(current / 10);
        }

        if (set.has(sum)) return false;
        set.add(sum);
        n = sum;
    }
    return true;
};