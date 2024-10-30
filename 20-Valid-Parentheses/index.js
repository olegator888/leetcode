const closeToOpen = {
    ")": "(",
    "}": "{",
    "]": "["
}

var isValid = function (s) {
    const stack = [];

    for (const p of s) {
        if (!(p in closeToOpen)) {
            stack.push(p);
            continue;
        }

        const popped = stack.pop();
        if (popped !== closeToOpen[p]) {
            return false;
        }
    }

    return stack.length === 0;
};