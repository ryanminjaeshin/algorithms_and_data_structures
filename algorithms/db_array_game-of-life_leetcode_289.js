// https://leetcode.com/problems/game-of-life/

/*

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

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

 var gameOfLife = function(board) {
   // mark live -> die as -1
   // mark die -> live as 2

   let row = board.length;
   let col = board[0].length;

   // Mark the board
   for (let i = 0; i < row; i += 1) {
     for (let j = 0; j < col; j += 1) {
       let cell = board[i][j];
       let neighbors = getNeighbors(i, j, board);
       if (cell == 1 && (neighbors < 2 || neighbors > 3)) board[i][j] = -1;
       if (cell == 0 && neighbors == 3) board[i][j] = 2;
     }
   }

   // convert the marked board
   for (let i = 0; i < row; i += 1) {
     for (let j = 0; j < col; j += 1) {
       let cell = board[i][j];
       if (cell == -1) board[i][j] = 0;
       if (cell == 2) board[i][j] = 1;
     }
   }

   return board;
};