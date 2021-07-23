var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1),
        set2 = new Set(nums2);
    
    return [...set1].filter(x => set2.has(x))
};
// recap