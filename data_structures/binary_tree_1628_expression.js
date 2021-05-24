const opFunMap = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  }
  
  const Node = function(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  };
  
  Node.prototype.evaluate = function() {
    const { data, left, right } = this;
    if (!left) return data;
    
    const opFun = opFunMap[data];
    return opFun(left.evaluate(), right.evaluate());
  };
  
  class TreeBuilder {
    buildTree(postfix) {
      const stk = [];
      for(const p of postfix) {
        if (p in opFunMap) {
          // note left operand is pushed first
          const right = stk.pop(), left = stk.pop();
          stk.push(new Node(p, left, right));
        } else {
          stk.push(new Node(+p));
        }
      }
      return stk[stk.length - 1];
    }
  }