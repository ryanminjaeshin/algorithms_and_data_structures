// amazon
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

// Intuition
// Let chopper help explain.

// Starting at the origin and face north (0,1),
// after one sequence of instructions,

// if chopper return to the origin, he is obvious in an circle.
// if chopper finishes with face not towards north,
// it will get back to the initial status in another one or three sequences.

// Explanation
// (x,y) is the location of chopper.
// d[i] is the direction he is facing.
// i = (i + 1) % 4 will turn right
// i = (i + 3) % 4 will turn left
// Check the final status after instructions.


// Complexity
// Time O(N)
// Space O(1)

var isRobotBounded = function(instructions) {
    let x = 0,
        y = 0,
        i = 0,
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let j = 0; j < instructions.length; j ++) {
        if (instructions[j] == 'R') {
            i = (i+1) % 4; // turn right
        } else if (instructions[j] == 'L') {
            i = (i+3) % 4; // turn left
        } else {
            x += dirs[i][0];
            y += dirs[i][1];
        }
    }
    return x == 0 && y == 0 || i > 0;
};
