/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
    const stack = [];
    const res = [];

    for (let i = 0; i < pattern.length + 1; i++) {
        stack.push(i + 1);

        while (stack.length > 0 && (i === pattern.length || pattern[i] === "I")) {
            res.push(stack.pop())
        }
    }

    return res.join("");
};