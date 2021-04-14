var isRobotBounded = function(instructions) {
    let [x,y, dx, dy] = [0, 0, 0, 1];
    for (let i of instructions) {
        if(i === 'R') {
            [dx,dy] = [dy, -dx]
        } else if (i === 'L') {
            [dx, dy] = [-dy, dx]
        } else {
            [x, y] = [x + dx, y + dy]
        }
    }

    return (!x && !y) || dx || dy != 1;
};