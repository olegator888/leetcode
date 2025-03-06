package main

func pivotArray(nums []int, pivot int) []int {
	i, j := 0, len(nums)-1
	i2, j2 := 0, len(nums)-1
	res := make([]int, len(nums))

	for i < len(nums) {
		if nums[i] < pivot {
			res[i2] = nums[i]
			i2++
		}
		if nums[j] > pivot {
			res[j2] = nums[j]
			j2--
		}
		i++
		j--
	}

	for i2 <= j2 {
		res[i2] = pivot
		i2++
	}

	return res
}
