/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    let trans = new Array(matrix[0].length).fill().map(() => new Array(matrix.length))
    for (let i = 0; i < matrix[0].length; i ++) {
        for (let j = 0; j < matrix.length; j ++) {
            trans[i][j] = matrix[j][i]
        }
    }
    return trans;
};