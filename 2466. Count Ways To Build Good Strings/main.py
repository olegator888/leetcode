class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        cache = {}

        def get_strings(length):
            if length > high: 
                return 0

            if length in cache:
                return cache[length]    
            
            cache[length] = (
                (1 if low <= length <= high else 0)
                + get_strings(length + zero)
                + get_strings(length + one)
            ) % 1000000007

            return cache[length] 

        return get_strings(0)