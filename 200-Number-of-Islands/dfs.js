/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const rows = grid.length, cols = grid[0].length;

    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let count = 0;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] !== "1") {
            return;
        }
        grid[r][c] = "*";
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                count += 1;
                dfs(r, c);
            }
        }
    }

    return count;
};