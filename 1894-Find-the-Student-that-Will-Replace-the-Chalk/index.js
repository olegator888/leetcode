var chalkReplacer = function(chalk, k) {
    let chalkSum = chalk.reduce((acc, cur) => acc + cur, 0);
    k = k % chalkSum;
    for (let i = 0; i < chalk.length; i++) {
        if (chalk[i] > k) return i;
        k -= chalk[i];
    }
};