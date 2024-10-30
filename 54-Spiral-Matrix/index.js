// total sam

var spiralOrder = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const res = [];
    let left = 0, right = cols, top = 0, bottom = rows;

    while (true) {
        // left to right
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
            if (res.length === rows * cols) return res;
        }
        top++;

        // top to bottom
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right - 1]);
            if (res.length === rows * cols) return res;
        }
        right--;

        // right to left
        for (let i = right - 1; i > left - 1; i--) {
            res.push(matrix[bottom - 1][i]);
            if (res.length === rows * cols) return res;
        }
        bottom--;

        // bottom to top
        for (let i = bottom - 1; i > top - 1; i--) {
            res.push(matrix[i][left]);
            if (res.length === rows * cols) return res;
        }
        left++;
    }
};