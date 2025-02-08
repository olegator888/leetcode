# total sam

from collections import defaultdict
import heapq


class NumberContainers:
    # hashmap: index -> number
    # hashmap: number -> min heap of indexes

    def __init__(self):
        self.index_to_number = {}
        self.number_to_indexes = defaultdict(list)

    def change(self, index: int, number: int) -> None:
        self.index_to_number[index] = number
        heapq.heappush(self.number_to_indexes[number], index)
        
    def find(self, number: int) -> int:
        indexes = self.number_to_indexes[number]
        while indexes and number != self.index_to_number[indexes[0]]:
            heapq.heappop(indexes)
        if indexes:
            return indexes[0] 
        else:
            return -1


# Your NumberContainers object will be instantiated and called as such:
# obj = NumberContainers()
# obj.change(index,number)
# param_2 = obj.find(number)