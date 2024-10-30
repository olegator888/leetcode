// total sam

var spiralOrder = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const res = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let curDir = 0;
    let r = 0, c = 0;

    while (res.length < rows * cols) {
        let [dr, dc] = directions[curDir];
        while (r >= 0 && r < rows && c >= 0 && c < cols && matrix[r][c] !== "*") {
            res.push(matrix[r][c]);
            matrix[r][c] = "*";
            r += dr;
            c += dc;
        }
        r -= dr;
        c -= dc;
        curDir = (curDir + 1) % 4;
        [dr, dc] = directions[curDir]
        r += dr;
        c += dc;
    }

    return res;
};