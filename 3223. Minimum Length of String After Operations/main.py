from collections import Counter


class Solution:
    def minimumLength(self, s: str) -> int:
        cnt = Counter(s)

        deleted = 0
        for freq in cnt.values():
            if freq % 2 == 0:
                deleted += freq - 2
            else:
                deleted += freq - 1    
        
        return len(s) - deleted