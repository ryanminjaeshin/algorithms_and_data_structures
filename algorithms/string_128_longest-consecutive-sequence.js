var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let longest = 0;

  for (n of set) {
      if(set.has(n - 1)) continue;
      let length = 1;
      while (set.has(n + length)) length ++;
      longest = Math.max(longest, length);
  }
  return longest;
};