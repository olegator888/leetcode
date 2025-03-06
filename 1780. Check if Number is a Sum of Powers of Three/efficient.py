class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        # find largest power of 3^i <= n
        i = 0
        while 3**(i+1) <= n:
            i += 1

        # greedy, remove largest powers
        while i >= 0:
            power = 3**i
            if power <= n:
                n -= power
            i -= 1
        
        return n == 0