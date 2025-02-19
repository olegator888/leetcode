/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    const totalHappy = 3 * Math.pow(2, n - 1)
    const res = [];

    let choices = "abc";
    let left = 1;
    let right = totalHappy;

    for (let i = 0; i < n; i++) {
        let cur = left;
        let partitionSize = Math.floor((right - left + 1) / choices.length);

        for (const c of choices) {
            if (k >= cur && k < cur + partitionSize) {
                res.push(c)
                left = cur
                right = cur + partitionSize - 1
                choices = "abc".replace(c, '')
                break
            }
            cur += partitionSize
        }
    }

    return res.join("");
};