from typing import List

class Solution:
    def doesValidArrayExist(self, derived: List[int]) -> bool:
        last = 0
        
        for n in derived:
            if n:
                last = ~last 
        
        return last == 0