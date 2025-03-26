package main

import (
	"math"
	"slices"
)

func minOperations(grid [][]int, x int) int {
	nums := make([]int, 0)
	total := 0

	for _, row := range grid {
		for _, n := range row {
			if n%x != grid[0][0]%x {
				return -1
			}
			nums = append(nums, n)
			total += n
		}
	}

	slices.Sort(nums)

	prefix := 0
	res := math.MaxInt

	for i := range nums {
		costLeft := nums[i]*i - prefix
		costRight := total - prefix - (nums[i] * (len(nums) - i))
		operations := (costLeft + costRight) / x
		res = min(res, operations)
		prefix += nums[i]
	}

	return res
}
