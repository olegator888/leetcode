from typing import List

class Solution:
    def isArraySpecial(self, nums: List[int], queries: List[List[int]]) -> List[bool]:
        res = []
        violating_indicies = []
        for i in range(1, len(nums)):
            if nums[i] % 2 == nums[i - 1] % 2:
                violating_indicies.append(i)

        def binary_search(start, end):
            left, right = 0, len(violating_indicies) - 1
            while left <= right:
                m = (left + right) // 2
                index = violating_indicies[m]
                if index < start:
                    left = m + 1
                elif index > end:
                    right = m - 1
                else:
                    return False
            return True

        for start, end in queries:
            res.append(binary_search(start + 1, end))

        return res
