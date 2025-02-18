class Solution:
    def smallestNumber(self, pattern: str) -> str:
        res, stack = [], []

        for i in range(0, len(pattern) + 1):
            stack.append(i + 1)

            while stack and (i == len(pattern) or pattern[i] == "I"):
                res.append(str(stack.pop()))
        
        return "".join(res)