var removeDuplicates = function(s) {
    let p1 = 0,
        p2 = 1;
    while (p2 < s.length) {
        p1 ++;
        p2 ++;
        if (s[p1 - 1] === s[p2 - 1]) {
            s = s.slice(0, p1 - 1) + s.slice(p2, s.length);
            p1 = 0;
            p2 = 1;
        }
    }
    return s;
};

const removeDuplicates = s => {
  const stack = [];
  for (let char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }
  return stack.join('');
};