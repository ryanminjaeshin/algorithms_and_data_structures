var isPalindrome = function(x) {
  let arr = x.toString().split('');
  let left = 0,
      right = arr.length - 1;
  while (left < right) {
      if (arr[left++] !== arr[right--]) return false;
  }
  return true;

};