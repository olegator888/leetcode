package main

import "math"

func maxAbsoluteSum(nums []int) int {
	min_pre, max_pre, cur, res := 0, 0, 0, 0
	for _, n := range nums {
		cur += n
		res = max(res, int(math.Abs(float64(cur-min_pre))), int(math.Abs(float64(cur-max_pre))))
		min_pre = min(min_pre, cur)
		max_pre = max(max_pre, cur)
	}
	return res
}
