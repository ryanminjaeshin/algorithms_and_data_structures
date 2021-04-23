// Amazon, two-pointers
/**
 * @param {number[]} A
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let res = [];
    for (let num of nums) {
        if (num % 2 === 0) {
            res.unshift(num)
        } else {
            res.push(num)
        }
    }
    return res;
};


var sortArrayByParity = function(A) {
    let p1 = 0;
    while (p1 < A.length) {
        let p2 = 0;
        if(A[p1] % 2 === 1) {
            p2 += p1 + 1
            while (p2 < A.length) {
                if (A[p2] % 2 === 0) {
                    [A[p1], A[p2]] = [A[p2], A[p1]];
                    break;
                }
                p2 ++;
            }
        }
        p1 ++;
    }
    return A
};

