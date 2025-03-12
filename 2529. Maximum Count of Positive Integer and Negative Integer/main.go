package main

func maximumCount(nums []int) int {
	neg := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] < 0 {
			neg++
		}
		if nums[i] > 0 {
			return max(neg, len(nums)-i)
		}
	}
	return neg
}
