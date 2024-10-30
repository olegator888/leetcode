class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        n = 0
        cur = head
        while cur:
            n += 1
            cur = cur.next

        partSize = n // k
        zeroParts = k - n % k if partSize == 0 else 0
        parts = [partSize] * k
        for i in range(n % k):
            parts[i] += 1

        res = []
        curPart = 0
        cur = head

        while len(res) + zeroParts < k:
            res.append(cur)
            for _ in range(parts[curPart] - 1):
                cur = cur.next
            curPart += 1
            if cur:
                tmp = cur.next
                cur.next = None
                cur = tmp

        for _ in range(zeroParts):
            res.append(None)

        return res
