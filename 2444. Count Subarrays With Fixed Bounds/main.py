from typing import List


class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        def black(i): return nums[i] < minK or nums[i] > maxK 
        def red(i): return nums[i] == minK
        def blue(i): return nums[i] == maxK

        count = 0
        start = 0
        # Add a "bad" block at the end to simpify end conditions
        nums.append(minK - 1)
        while True:
            # Move start to the next white sequence
            while start < len(nums) and black(start):
                start += 1
            if start == len(nums):
                break
            end = start
            if minK == maxK:
                while not black(end): end += 1
                l = end - start
                count += (l * (l + 1)) // 2
                start = end + 1
                continue
            # Count how many fixed-bounds subarrays there are in this sequence
            r = b = None # Initialize red and blue pointers
            while True:
                # Everytime we see a non-white block:
                if black(end) or red(end) or blue(end):
                    # 1. add to count
                    if r != None and b != None:
                        large = max(r, b)
                        small = min(r, b)
                        count += (small-start+1) * (end - large)
                    # 2. Update red and blue pointers
                    if red(end): r = end
                    elif blue(end): b = end
                    # 3. This segment is complete, go on to next one
                    elif black(end):
                        break
                end += 1
            start = end + 1
        return count
