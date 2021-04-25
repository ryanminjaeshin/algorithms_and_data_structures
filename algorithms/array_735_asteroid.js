// amazon, stack

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    let stack = [];
    for (let i = 0; i < asteroids.length; i ++) {
        let a = asteroids[i];
        if (stack.length === 0 || a > 0) {
            stack.push(a)
        } else {
            while (true) {
                let top = stack[stack.length - 1];
                if (top < 0) {
                    stack.push(a)
                    break;
                } else if (top == -a) {
                    stack.pop();
                    break;
                } else if (top > -a) {
                    break;
                } else {
                    stack.pop();
                    if (stack.length == 0) {
                        stack.push(a);
                        break;
                    }
                }
            }
        }
    }
    return stack;
};
    