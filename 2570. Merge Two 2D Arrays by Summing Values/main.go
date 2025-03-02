package main

func mergeArrays(nums1 [][]int, nums2 [][]int) [][]int {
	i, j := 0, 0
	res := make([][]int, 0)

	for i < len(nums1) && j < len(nums2) {
		id1, val1 := nums1[i][0], nums1[i][1]
		id2, val2 := nums2[j][0], nums2[j][1]
		if id1 == id2 {
			res = append(res, []int{id1, val1 + val2})
			i++
			j++
		} else if id1 < id2 {
			res = append(res, nums1[i])
			i++
		} else {
			res = append(res, nums2[j])
			j++
		}
	}
	for i < len(nums1) {
		res = append(res, nums1[i])
		i++
	}
	for j < len(nums2) {
		res = append(res, nums2[j])
		j++
	}

	return res
}
