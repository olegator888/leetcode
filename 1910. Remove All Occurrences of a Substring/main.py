# total sam

class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        stack = []

        def check_stack():
            if len(stack) < len(part):
                return False
            start = len(stack) - len(part)
            for i in range(start, len(stack)):
                if stack[i] != part[i - start]:
                    return False
            return True

        for c in s:
            stack.append(c)
            if not check_stack():
                continue
            for _ in range(len(part)):
                stack.pop()
        
        return "".join(stack)