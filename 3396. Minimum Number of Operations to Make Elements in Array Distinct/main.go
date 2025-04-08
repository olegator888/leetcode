package main

import "math"

func minimumOperations(nums []int) int {
	cnt := make(map[int]int)
	idx := -1
	for i := len(nums) - 1; i > -1; i-- {
		cnt[nums[i]]++
		if cnt[nums[i]] == 2 {
			idx = i
			break
		}
	}
	return int(math.Ceil(float64((idx + 1)) / 3.0))
}
