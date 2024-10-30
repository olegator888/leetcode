class Solution:
    def minSwaps(self, s: str) -> int:
        opening = 0
        unbalanced = 0

        for c in s:
            if c == "[":
                opening += 1
            else:
                if opening:
                    opening -= 1
                else:
                    unbalanced += 1        

        return (unbalanced + 1) // 2