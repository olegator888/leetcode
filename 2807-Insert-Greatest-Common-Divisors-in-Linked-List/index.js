// sam

const gcd = (a, b) => {
    while (b > 0) {
        let tmp = a
        a = b
        b = tmp % b
    }
    return a
}

var insertGreatestCommonDivisors = function(head) {
    let cur = head;

    while (cur) {
        if (cur.next) {
            const next = cur.next;
            cur.next = new ListNode(gcd(cur.val, next.val), next);
            cur = next;
        } else {
            cur = cur.next;
        }
    }

    return head;
};