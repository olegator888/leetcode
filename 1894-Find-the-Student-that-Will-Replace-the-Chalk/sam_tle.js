/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const index = (i) => i % chalk.length;

    let i = 0;

    while (true) {
        k -= chalk[index(i)];
        if (k < 0) {
            return index(i);
        }
        i += 1;
    }
};