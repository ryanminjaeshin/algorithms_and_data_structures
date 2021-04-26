/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    let row = board.length;
    let col = board[0].length;
    // col
    for (let i = 0; i < row; i ++) {
        if (board[i][0] == 'O') dfs(board, i, 0);
        if (board[i][col - 1] == 'O') dfs(board, i, col - 1)
    }
    // row
    for (let i = 0; i < col; i ++) {
        if (board[0][i] == 'O') dfs(board, 0, i);
        if (board[row - 1][i] == 'O') dfs(board, row - 1, i);
    }
    
    for (let i = 0; i < row; i ++) {
        for (let j = 0; j < col; j ++) {
            if (board[i][j] == 'V') {
                board[i][j] = 'O'
            } else if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
    return board;
};

const dfs = (board, i, j) => {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length -1 || board[i][j] !== 'O') return;
    board[i][j] = 'V';
    dfs(board, i - 1, j);
    dfs(board, i, j - 1);
    dfs(board, i + 1, j);
    dfs(board, i, j + 1);
}