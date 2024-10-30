class Solution:
    def maximumSwap(self, num: int) -> int:
        nums = list(str(num))

        suffix_max = [None] * (len(nums))
        suffix_max[-1] = (nums[-1], len(nums) - 1)

        for i in range(len(nums) - 2, -1, -1):
            if suffix_max[i + 1][0] >= nums[i]:
                suffix_max[i] = (suffix_max[i + 1][0], suffix_max[i + 1][1])
            else:
                suffix_max[i] = (nums[i], i)

        for i, n in enumerate(nums):
            if suffix_max[i][0] > n:
                nums[i], nums[suffix_max[i][1]] = nums[suffix_max[i][1]], nums[i]
                break

        return int("".join(nums))    


