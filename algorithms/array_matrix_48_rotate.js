var rotate = function(matrix) {
  let len = matrix.length;
  // transpose
  for (let i = 0; i < len; i ++) {
      for (let j = i; j < len; j ++) {
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
  }
  // reverse
  for (let i = 0; i < len; i ++) {
      for (let j = 0; j < (len/2); j ++) {
          let temp = matrix[i][j];
          matrix[i][j] = matrix[i][len - 1 - j];
          matrix[i][len - 1 - j] = temp;
      }
  }
};