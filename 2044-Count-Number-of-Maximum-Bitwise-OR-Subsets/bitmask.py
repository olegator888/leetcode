from typing import List


class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        max_or = 0
        for n in nums:
            max_or |= n

        length = len(nums)
        res = 0

        for subset in range(1, 2**length):
            cur_or = 0

            for i in range(length):
                if (1 << i) & subset:
                    cur_or |= nums[i]

            res += 1 if cur_or == max_or else 0

        return res