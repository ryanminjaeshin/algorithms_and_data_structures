var merge = function(nums1, m, nums2, n) {
    let lastIndex = m + n - 1;
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[lastIndex] = nums1[m - 1];
            m --;
        } else {
            nums1[lastIndex] = nums2[n - 1];
            n --;
        }
        lastIndex --;
    }
    while (n > 0) {
        nums1[lastIndex] = nums2[n - 1];
        lastIndex --;
        n --;
    }
    return nums1;
};