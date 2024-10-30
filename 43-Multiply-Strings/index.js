// total sam

var multiply = function (num1, num2) {
    let n = 0;

    const toSumUp = [];

    for (let i = num1.length - 1; i > -1; i--) {
        const num = [];
        let carry = 0;

        for (let k = num1.length - 1; k > i; k--) {
            num.push(0);
        }

        for (let j = num2.length - 1; j > -1; j--) {
            const n1 = Number(num1[i]), n2 = Number(num2[j]);
            const val = n1 * n2 + carry;
            num.push(val % 10);
            carry = Math.floor(val / 10);
        }

        if (carry) {
            num.push(carry);
        }

        n = Math.max(n, num.length);
        toSumUp.push(num);
    }

    const res = [];
    let carry = 0;

    for (let i = 0; i < n; i++) {
        let sum = carry;
        for (const item of toSumUp) {
            sum += (item[i] || 0);
        }
        res.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    if (carry) {
        res.push(carry);
    }

    while (res[res.length - 1] === 0) {
        res.pop()
    }

    return res.reverse().join("") || "0";
};