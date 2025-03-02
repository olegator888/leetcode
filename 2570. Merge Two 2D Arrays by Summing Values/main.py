from typing import List


class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        res = []
        i, j = 0, 0
        while i < len(nums1) and j < len(nums2):
            id1, value1 = nums1[i]
            id2, value2 = nums2[j]
            if id1 == id2:
                res.append([id1, value1 + value2])
                i += 1
                j += 1
            elif id1 < id2:
                res.append(nums1[i])
                i += 1
            else:
                res.append(nums2[j])
                j += 1
        while i < len(nums1):
            res.append(nums1[i])
            i += 1
        while j < len(nums2):
            res.append(nums2[j])
            j += 1

        return res