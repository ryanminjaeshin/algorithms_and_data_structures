Rules:

An island is surrounded by water(0's)
We count things apart of our island if it is horizontal or vertical connected
Plan:
Start at the top left of the 2d array, and visit the first row, and all its columns, trying to find the start of the first island
Once we find a 1, we can increment the number of islands, but we want to know where the island ends. So let’s look and follow any of the horizontal or vertical spots near the current position we are on.
First, let’s mark the current start/visited parts of the islands as visited by turning them into a 0,
Second, explore all the adjacent possibilities,
If one of them is a 1, recursively turn it into a 0 and check its children
Once we are done, we should have gotten rid of the island that we discovered and can move on to the next island, if it exists in the 2d array
const numIslands =  (grid) => {
	let count = 0 // the counted islands
	//Go though each cell of the 2d array/grid
	for(let row = 0; row < grid.length; row++){
	for(let col = 0; col < grid[row].length; col ++){
	if(grid[row][col] == '1'){
		count ++
		explore(row,col, grid)
            }
        }
    }
    return count
}



// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function explore(row, col, grid){
    //Let's return IF
    // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
     if (row < 0 || col < 0 || row >= grid.length
         || col >= grid[row].length || grid[row][col] === '0')  {
        return
    }

    //Otherwise, we should explore it!
    //First let's set the current spot to "0"
    grid[row][col]='0'

	//Possibilites:
	// 1) 1 to the right, left, top, bottom
	//right
	explore(row, col+1, grid)
    //Left
	explore(row, col-1, grid)
    //Up
	explore(row+1, col, grid)
    //Down
	explore(row-1, col, grid)

}