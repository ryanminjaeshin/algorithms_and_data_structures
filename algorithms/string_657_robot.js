var judgeCircle = function(moves) {

    let position = {
        LR: 0,
        UD: 0,
    }
    
    for (let i = 0; i < moves.length; i ++) {
        let move = moves[i];
        if (move === 'L') {
            position['LR'] ++;
        } else if (move === 'R') {
            position['LR'] --;
        } else if (move === 'U') {
            position['UD'] ++;
        } else if (move === 'D') {
            position['UD'] --;
        }
    }
    
    return Object.values(position).every(x => x === 0)
};