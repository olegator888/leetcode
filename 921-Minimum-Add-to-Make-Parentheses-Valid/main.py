class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        invalidOpening, invalidClosing = 0, 0

        for c in s:
            if c == "(":
                invalidOpening += 1
            else:
                if invalidOpening:
                    invalidOpening -= 1
                else:
                    invalidClosing += 1        

        return invalidOpening + invalidClosing