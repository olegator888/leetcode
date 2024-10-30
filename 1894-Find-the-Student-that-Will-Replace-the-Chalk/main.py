class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        chalk_sum = 0
        for c in chalk:
            chalk_sum += c

        k %= chalk_sum
        for i in range(len(chalk)):
            if k < chalk[i]: return i
            k -= chalk[i]