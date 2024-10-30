/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    const res = new Set();
    let minRemoved = Infinity;

    const dfs = (i, open, close, items, removed) => {
        if (i === s.length) {
            if (open > close || removed > minRemoved) {
                return;
            }

            if (removed < minRemoved) {
                res.clear();
                minRemoved = removed;
            }

            return res.add(items.join(""));
        }

        if (s[i] !== "(" && s[i] !== ")") {
            items.push(s[i]);
            dfs(i + 1, open, close, items, removed);
            items.pop();
            return;
        }

        // remove paranthesis
        dfs(i + 1, open, close, items, removed + 1);

        // include paranthesis
        items.push(s[i]);

        if (s[i] === "(") {
            dfs(i + 1, open + 1, close, items, removed);
        } else if (close < open) {
            dfs(i + 1, open, close + 1, items, removed);
        }

        items.pop();
    }

    dfs(0, 0, 0, [], 0);
    return Array.from(res);
};