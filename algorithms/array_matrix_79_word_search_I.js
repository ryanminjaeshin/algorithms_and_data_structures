var exist = function(board, word) {
  if(!board || board.length === 0) return false;
  let row = board.length,
      col = board[0].length,
      dist = [[-1,0], [0, -1], [1, 0], [0, 1]];

  const check = (i, j, k) => {
      if (board[i][j] !== word[k]) return false;
      if (k === word.length - 1) return true;

      board[i][j] = '*' // visited
      for (let [dx, dy] of dist) {
          let x = i + dx;
          let y = j + dy;
          if (x >= 0 && y >= 0 && x < row && y < col) {
              if (check(x, y, k + 1)) return true;
          }
      }
      board[i][j] = word[k] // reset;
      return false;
  }

  for (let i = 0; i < row; i ++) {
      for (let j = 0; j < col; j ++) {
          if(check(i, j, 0)) return true;
      }
  }
  return false;
};

// Time O(m*n*4^l)
// Space O(m*n + l)
// recap