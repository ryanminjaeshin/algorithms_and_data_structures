const longestPalindrome = (s) => {
  let res = 0;
  let map = {};

  for (let char of s) {
    if(!map[char]) map[char] = 0;
    map[char] ++
    if (map[char] % 2 == 0) res += 2;
  }
  return s.length > res ? res + 1 : res;
};