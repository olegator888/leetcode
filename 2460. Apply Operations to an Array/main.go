package main

func applyOperations(nums []int) []int {
	for i := range len(nums) - 1 {
		if nums[i] == nums[i+1] {
			nums[i] *= 2
			nums[i+1] = 0
		}
	}
	l := 0
	for i := range len(nums) {
		if nums[i] > 0 {
			nums[i], nums[l] = nums[l], nums[i]
			l++
		}
	}
	return nums
}
