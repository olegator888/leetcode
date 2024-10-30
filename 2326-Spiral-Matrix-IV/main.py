# total sam

class Solution:
    def spiralMatrix(self, m: int, n: int, head: Optional[ListNode]) -> List[List[int]]:
        directions = [(0,1), (1,0), (0,-1), (-1,0)]
        cur_dir = 0
        matrix = [[-1] * n for _ in range(m)]

        r, c = 0, 0

        while head:
            dr, dc = directions[cur_dir]
            while head and r in range(m) and c in range(n) and matrix[r][c] == -1:
                matrix[r][c] = head.val
                head = head.next
                r, c = r + dr, c + dc
            r, c = r - dr, c - dc
            cur_dir = (cur_dir + 1) % len(directions)
            dr, dc = directions[cur_dir]
            r, c = r + dr, c + dc

        return matrix