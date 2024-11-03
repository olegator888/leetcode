from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        def twoSum(i, target):
            l, r = i, len(nums) - 1
            pairs = []

            while l < r:
                total = nums[l] + nums[r]
                if total > target:
                    r -= 1
                    while r > l and nums[r] == nums[r + 1]:
                        r -= 1
                elif total < target:
                    l += 1
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
                else:
                    pairs.append([nums[l], nums[r]])
                    l += 1
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
            
            return pairs
        
        res = []
        i = 0
        while i < len(nums):
            n = nums[i]
            items = twoSum(i + 1, -n)
            for item in items:
                res.append([n, item[0], item[1]])
            i += 1
            while i < len(nums) and nums[i] == nums[i - 1]:
                i += 1
        
        return res