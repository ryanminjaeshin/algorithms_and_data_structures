var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z\d]/g, '');

  for(let left = 0, right = s.length - 1;left <= right; left ++, right --) {
      if(s[left] !== s[right]) return false;
  }
  return true;
};