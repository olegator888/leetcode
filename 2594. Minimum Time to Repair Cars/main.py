from math import sqrt
from typing import List


class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        def count_repaired(time):
            count = 0
            for r in ranks:
                count += int(sqrt(time / r)) 
            return count

        l, r = 1, ranks[0] * cars * cars
        res = -1

        while l <= r:
            m = (l + r) // 2
            if count_repaired(m) >= cars:
                res = m
                r = m - 1
            else:
                l = m + 1

        return res

    """
    time = r * n2 
    n2 = time/r
    n = sqrt(time/r) - amount of cars that one mechanic with rank r can repair in time time

    so we can just search time with binary search and theck that time if it is possible to repair 'cars' cars in that time
    if it's possible - update retuls and try to find even smaller timer
    if it's not possible - update left pointer and try to find bigger time
    """