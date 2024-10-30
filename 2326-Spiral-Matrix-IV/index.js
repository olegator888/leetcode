var spiralMatrix = function(m, n, head) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let curDir = 0;
    const matrix = Array.from({length: m}).map(() => Array(n).fill(-1));
    let r = 0, c = 0;

    while (head) {
        while (head) {
            const [dr, dc] = directions[curDir];

            if (r < 0 || r === m || c < 0 || c === n || matrix[r][c] !== -1) {
                r -= dr;
                c -= dc;
                break;
            }

            matrix[r][c] = head.val;
            head = head.next;
            r += dr;
            c += dc;
        }

        curDir = (curDir + 1) % directions.length;
        const [dr, dc] = directions[curDir];
        r += dr;
        c += dc;
    }

    return matrix;
};