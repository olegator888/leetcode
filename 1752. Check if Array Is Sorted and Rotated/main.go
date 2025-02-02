package main

func check(nums []int) bool {
	cnt := 0
	for i := 1; i < len(nums); i++ {
		if nums[i] < nums[i-1] {
			cnt++
		}
		if cnt == 2 {
			return false
		}
	}
	if cnt == 1 && nums[0] < nums[len(nums)-1] {
		return false
	}
	return true
}
