# total sam :)

class Solution:
    def smallestNumber(self, pattern: str) -> str:
        used = set()
        cur = []

        def backtrack(i):
            if i == len(pattern):
                return True
            if pattern[i] == "I":
                for j in range(cur[-1] + 1, 10):
                    if j in used: continue
                    cur.append(j)
                    used.add(j)
                    if backtrack(i + 1):
                        return True
                    cur.pop()
                    used.remove(j)
            else:
                for j in range(1, cur[-1]):
                    if j in used: continue
                    cur.append(j)
                    used.add(j)
                    if backtrack(i + 1):
                        return True
                    cur.pop()
                    used.remove(j)
            return False
            
        for i in range(1, 10):
            cur.append(i)
            used.add(i)
            if backtrack(0):
                return "".join([str(n) for n in cur])
            used.remove(i)
            cur.pop()