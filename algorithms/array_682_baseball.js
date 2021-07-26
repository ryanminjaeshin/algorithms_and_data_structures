/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let stack = [];
    for (let i = 0; i < ops.length; i ++) {
        let op = ops[i];
        if (op == "D") {
            stack.push(stack[stack.length - 1] * 2)
        } else if (op == 'C') {
            stack.pop();
        } else if (op == '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(Number(op))
        }
    }
    return stack.reduce((a,b) => a + b)
};
// recap