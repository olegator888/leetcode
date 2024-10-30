// both solutions sam
// used hint only for this:
/*
    const parts = Array(k).fill(Math.floor(nodes.length / k));
    for (let i = 0; i < nodes.length % k; i++) {
        parts[i] += 1;
    }
* */

// store list nodes in an array
// split array in k parts
// convert each part to linked lists
var splitListToParts = function(head, k) {
    const nodes = [];
    let cur = head;
    while (cur) {
        nodes.push(cur.val);
        cur = cur.next;
    }

    const parts = Array(k).fill(Math.floor(nodes.length / k));
    for (let i = 0; i < nodes.length % k; i++) {
        parts[i] += 1;
    }

    const arrayToLinked = (arr) => {
        if (arr[0] === null) return null;
        const head = {};
        let cur = head;
        for (let i = 0; i < arr.length; i++) {
            cur.val = arr[i];
            if (i === arr.length - 1) {
                cur.next = null
            } else {
                cur.next = {};
                cur = cur.next;
            }
        }

        return head;
    }

    const res = [];

    let j = 0;
    for (let i = 0; i < k; i++) {
        if (parts[i] === 0) {
            res.push(null);
            continue;
        }
        res.push(arrayToLinked(nodes.slice(j, j + parts[i])))
        j += parts[i];
    }

    return res;
};

// in place
var splitListToParts = function(head, k) {
    let n = 0;
    let cur = head;
    while (cur) {
        n += 1;
        cur = cur.next;
    }

    const partSize = n / k;
    const zeroParts = partSize === 0 ? k - n % k : 0;
    const parts = Array(k).fill(Math.floor(partSize));
    for (let i = 0; i < n % k; i++) {
        parts[i] += 1;
    }

    const res = [];

    cur = head;
    let curPart = 0;
    while (res.length + zeroParts < k) {
        res.push(cur);
        for (let i = 0; i < parts[curPart] - 1; i++) {
            cur = cur.next;
        }
        curPart += 1;
        if (cur) {
            const tmp = cur.next;
            cur.next = null;
            cur = tmp;
        }
    }

    for (let i = 0; i < zeroParts; i++) {
        res.push(null);
    }

    return res;
};
