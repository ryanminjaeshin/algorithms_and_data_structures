var setZeroes = function(matrix) {
  let row = matrix.length,
      col = matrix[0].length

  for (let r = 0; r < row; r ++) {
      for (let c = 0; c < col; c ++) {
          if(matrix[r][c] === 0) {
              setMatrix(matrix, r, c)
          }
      }
  }

  for (let r = 0; r < row; r ++) {
      for (let c = 0; c < col; c++) {
          if(matrix[r][c] === true) matrix[r][c] = 0;
      }
  }
  return matrix;
};

const setMatrix = (matrix, r, c) => {

  for (let i = 0; i < matrix[0].length; i ++) {
      if(matrix[r][i] !== 0) matrix[r][i] = true;
  }
  for (let i = 0; i < matrix.length; i ++) {
      if(matrix[i][c] !== 0) matrix[i][c] = true;
  }
  matrix[r][c] = 0;
}
// recap