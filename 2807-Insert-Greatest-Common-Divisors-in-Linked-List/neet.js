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

    while (cur.next) {
        cur.next = new ListNode(gcd(cur.val, cur.next.val), cur.next);
        cur = cur.next.next;
    }

    return head;
};