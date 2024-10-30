# sam

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def gcd(a, b):
            while b > 0:
                a, b = b, a % b
            return a

        cur = head
        while cur:
            tmp = cur.next
            if cur.next:
                cur.next = ListNode(gcd(cur.val, cur.next.val), tmp)
                cur = tmp
            else:
                cur = cur.next

        return head