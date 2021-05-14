/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    let getDistance = a => (a[0] **2) + (a[1] **2)
    return points.sort((a, b) => getDistance(a) - getDistance(b)).slice(0, k)
};

// recap