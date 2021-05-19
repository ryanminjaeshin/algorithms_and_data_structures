// amazon, backtracking
var generateParenthesis = function(n) {
    const res = [];
    
    backtrack("", n, n);
    
    return res;
    
    function backtrack(parens, left, right) {
        if (left === 0 && right === 0) {
            res.push(parens);
            return;
        }
        
        if (left > 0) {
            backtrack(parens + "(", left - 1, right);
        }
        if (right > left) {
            backtrack(parens + ")", left, right - 1);
        }
    }
};
// recap

function generateParenthesis(n) {
    const res = [];
  
    function go(l, r, s) {  // l: left remaining, r: right remaining
      if (l > r) return;  // The number of '(' should be always >= ')'
  
      if (l === 0 && r === 0) {
        res.push(s);
        return;
      }
  
      if (l > 0) go(l - 1, r, s + '(');
      if (r > 0) go(l, r - 1, s + ')');
    }
  
    go(n, n, '');
    return res;
  }