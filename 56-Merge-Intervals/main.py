from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        res = []

        for item in intervals:
            if res and res[-1][1] >= item[0]:
                start, end = res.pop()
                res.append([start, max(end, item[1])])
            else:
                res.append(item)    

        return res