/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const freq = Array.from({ length: nums.length + 1 }).map(() => []);
    const count = {};
    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }
    for (const [n, cnt] of Object.entries(count)) {
        freq[cnt].push(Number(n));
    }
    const res = [];
    for (let i = freq.length - 1; i > 0; i--) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }
};