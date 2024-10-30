/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const rows = grid.length, cols = grid[0].length;

    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let count = 0;

    const bfs = (r, c) => {
        const queue = [[r, c]];

        while (queue.length > 0) {
            let [r, c] = queue.pop();
            grid[r][c] = "*";

            for (const [dr, dc] of directions) {
                const row = r + dr, col = c + dc;
                if (row < 0 || col < 0 || row === rows || col === cols || grid[row][col] !== "1") {
                    continue;
                }
                queue.push([row, col]);
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                count += 1;
                bfs(r, c);
            }
        }
    }

    return count;
};