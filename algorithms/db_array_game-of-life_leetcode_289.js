// https://leetcode.com/problems/game-of-life/

/*

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The b is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//  I
//  O
//  C
//  E

var gameOfLife = function(b) {
  // live -> die -1
  // die -> live 2

  let row = b.length;
  let col = b[0].length;

  for (let i = 0; i < row; i ++) {
      for (let j = 0; j < col; j ++) {
          let cell = b[i][j];
          let neighbors = getNeighbor(i, j, b)
          if (cell == 1 && (neighbors < 2 || neighbors > 3)) b[i][j] = -1;
          if (cell == 0 && neighbors == 3) b[i][j] = 2;
      }
  }

  for (let i = 0; i < row; i ++) {
      for(let j = 0; j < col; j ++) {
          let cell = b[i][j];
          if (cell == -1) b[i][j] = 0;
          if (cell == 2) b[i][j] = 1;
      }
  }
  return b;
};

const getNeighbor = (r, c, b) => {
  let a = [-1, 0 ,1], count = 0;

  for (let i = 0; i < a.length; i ++) {
      for (let j = 0; j < a.length; j ++) {
          let self = (a[i] == 0 && a[j] == 0);
          if (!self && b[r + a[i]]) {
              let neighbor = b[r + a[i]][c + a[j]];
              if (Math.abs(neighbor) == 1) count ++;
          }
      }
  }

  return count;
}

// Time = O (m * n);
// Space = O(1);

// recap