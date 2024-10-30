var spiralMatrix = function(m, n, head) {
    let left = 0, right = n;
    let top = 0, bottom = m;
    const res = Array.from({length: m}).map(() => Array(n).fill(-1));

    while (head) {
        // from left to right
        for (let i = left; i < right; i++) {
            if (!head) return res;
            res[top][i] = head.val;
            head = head.next;
        }
        top += 1

        // from top to bottom
        for (let i = top; i < bottom; i++) {
            if (!head) return res;
            res[i][right - 1] = head.val;
            head = head.next;
        }
        right -= 1;

        // from right to left
        for (let i = right - 1; i > left - 1; i--) {
            if (!head) return res;
            res[bottom - 1][i] = head.val;
            head = head.next;
        }
        bottom -= 1;

        // from bottom to top
        for (let i = bottom - 1; i > top - 1; i--) {
            if (!head) return res;
            res[i][left] = head.val;
            head = head.next;
        }
        left += 1;
    }

    return res;
};