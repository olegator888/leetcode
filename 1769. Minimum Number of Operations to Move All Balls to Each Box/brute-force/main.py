from typing import List


class Solution:
    def minOperations(self, boxes: str) -> List[int]:
       res = []

       for i in range(len(boxes)):
           total = 0
           for j in range(len(boxes)):
               if i == j: continue
               total += int(boxes[j]) * abs(i - j)
           res.append(total)

       return res