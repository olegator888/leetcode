package main

import "math"

func minCapability(nums []int, k int) int {
	isValid := func(capability int) bool {
		count := 0
		i := 0
		for i < len(nums) {
			if nums[i] <= capability {
				count += 1
				i += 2
			} else {
				i += 1
			}
			if count == k {
				break
			}
		}
		return count == k
	}

	l, r := math.MaxInt, 0
	for _, n := range nums {
		l = min(l, n)
		r = max(r, n)
	}

	res := 0
	for l <= r {
		m := (l + r) / 2

		if isValid(m) {
			res = m
			r = m - 1
		} else {
			l = m + 1
		}
	}

	return res
}
