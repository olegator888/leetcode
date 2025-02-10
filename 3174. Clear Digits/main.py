class Solution:
    def clearDigits(self, s: str) -> str:
        stack = []

        for c in s:
            if not c.isdigit():
                stack.append(c)
            elif stack:
                stack.pop()

        return "".join(stack)