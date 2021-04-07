var generate = function(numRows) {
    if (numRows === 0) return [];
    let pascal = [[1]];
    for (let i = 1; i < numRows; i ++) {
        let currentRow = new Array(i + 1);
        currentRow[0] = 1;
        currentRow[currentRow.length - 1] = 1;
        for (let j = 1; j < i; j ++) {
            currentRow[j] = pascal[i-1][j-1]+pascal[i-1][j]
        }
        pascal.push(currentRow)  
    }
    return pascal
};