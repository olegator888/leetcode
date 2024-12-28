from typing import List


class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        max_sum, res = 0, []

        def backtrack(i, choosen):
            if len(choosen) == 3:
                nonlocal max_sum, res
                cur_sum = 0
                for j in choosen:
                    cur_sum += sum(nums[j:j+k])
                if cur_sum > max_sum:
                    max_sum = cur_sum
                    res = choosen[:]
                return

            if i >= len(nums) - 1:
                return    
            
            # Choose i
            choosen.append(i)
            backtrack(i + k, choosen)
            choosen.pop()

            # Skip i
            backtrack(i + 1, choosen)
        
        backtrack(0, [])

        return res