class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for p in s:
            if p not in closeToOpen:
                stack.append(p)
                continue

            if not stack or stack[-1] != closeToOpen[p]:
                return False

            stack.pop()

        return len(stack) == 0