package main

func longestMonotonicSubarray(nums []int) int {
	cur := 1
	res := 1
	direction := 0

	for i := 1; i < len(nums); i++ {
		if nums[i] > nums[i-1] {
			if direction > 0 {
				cur++
			} else {
				cur = 2
				direction = 1
			}
		} else if nums[i] < nums[i-1] {
			if direction < 0 {
				cur++
			} else {
				cur = 2
				direction = -1
			}
		} else {
			cur = 1
			direction = 0
		}
		res = max(res, cur)
	}

	return res
}
