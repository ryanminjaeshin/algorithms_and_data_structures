/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length === 0 && nums2.length === 0) {
         return null;
    }
    let sorted = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            sorted.push(nums2[j])
            j ++
        } else {
            sorted.push(nums1[i])
            i ++
        }
    }
    while (i < nums1.length) {
        sorted.push(nums1[i])
        i ++
    }
    while (j < nums2.length) {
        sorted.push(nums2[j])
        j ++
    }
    let mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 == 0) {
        return (sorted[mid] + sorted[mid - 1]) / 2
    } else {
        return sorted[mid]
    }
};

TC = O(N)

var findMedianSortedArrays = function(nums1, nums2) {
    let temp = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) {
            temp.push(nums1[p1]);
            p1 ++
        } else {
            temp.push(nums2[p2]);
            p2++
        }
    }
    while (p1 < nums1.length) {
        temp.push(nums1[p1])
        p1 ++
    }
    while (p2 < nums2.length) {
        temp.push(nums2[p2])
        p2 ++
    }
    
    let mid = 0 + Math.floor(temp.length / 2);
    if (temp.length % 2 == 1) {
        return temp[mid]
    } else {
        let med = (temp[mid-1] + temp[mid]) / 2
        return med
    }
};

// recap