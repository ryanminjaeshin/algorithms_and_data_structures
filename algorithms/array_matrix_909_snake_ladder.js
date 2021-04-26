// amazon
var snakesAndLadders = function(board) {
    
    // Flatten board to it is a single dimensional array
    board = board.reverse();
    let list = [];
    for(let i = 0; i <= board.length - 1; i++){
        if(i % 2 === 0){
            list = list.concat(board[i]);
        }else{
            let reverse = board[i].reverse();
            list = list.concat(reverse);
        }
    }
    
    // Final position:
    let final = board.length * board.length;
    
    // List is new board in a list;
    let moves = [0];
    
    // Update spots with the minimum amount of steps used to get to them
    let map = new Map();
    map.set(0,0);
    while(moves.length > 0){
        
        let current = moves.shift();
        
        // Check if the end of the baord has been hit. Return if it has
        if(current === final - 1){
            return map.get(current);
        }
        
        // Possible moves range, 1-6. This value will almost always be 6 until in the final 6 indexes. 
        let nextMoves = Math.min(6,final - current)
        
        // Check all possible moves
        for(let i = 1; i<= nextMoves; i++){
            let next = current + i; 
            
            // Grab the next index, or the snake or latter index.
			// Subtract 1 if it is a snake or ladder, to index it starting at 0. By default these values index by 1 in the original input array. 
            let key = list[next] === -1 ? next : list[next] - 1;
            
            // Mark or updated a tile as visited
            if(!map.has(key)){
                // Setup the next step, to have +1 steps as the step you are on right now
                map.set(key, map.get(current) + 1);
                moves.push(key)
            }
        } 
    }
    
    // If we never reached the return statement inside the while loop, there end cannot be reached. 
    return -1;
}