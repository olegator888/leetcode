package main

func minOperations(nums []int) int {
	res := 0
	for i := range len(nums) - 2 {
		if nums[i] == 0 {
			for j := i; j < i+3; j++ {
				if nums[j] == 0 {
					nums[j] = 1
				} else {
					nums[j] = 0
				}
			}
			res++
		}
	}
	if nums[len(nums)-1] == 0 || nums[len(nums)-2] == 0 {
		return -1
	}
	return res
}
