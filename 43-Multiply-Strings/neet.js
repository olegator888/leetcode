var multiply = function (num1, num2) {
    if ([num1, num2].includes("0")) {
        return "0"
    }

    let res = Array(num1.length + num2.length).fill(0);
    num1 = num1.split("").reverse();
    num2 = num2.split("").reverse();

    for (let i1 = 0; i1 < num1.length; i1++) {
        for (let i2 = 0; i2 < num2.length; i2++) {
            const digit = Number(num1[i1]) * Number(num2[i2]);
            res[i1 + i2] += digit;
            res[i1 + i2 + 1] += Math.floor(res[i1 + i2] / 10);
            res[i1 + i2] = res[i1 + i2] % 10
        }
    }

    res.reverse();
    let start = 0;
    while (start < res.length && res[start] === 0) {
        start += 1;
    }

    return res.slice(start).join("");
};