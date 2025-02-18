package main

import "fmt"

func findTargetSumWays(nums []int, target int) int {
	cache := make(map[string]int)

	var dfs func(i, total int) int
	dfs = func(i, total int) int {
		key := fmt.Sprintf("%d,%d", i, total)

		if val, found := cache[key]; found {
			return val
		}

		if i == len(nums) {
			if total == target {
				return 1
			}
			return 0
		}

		result := dfs(i+1, total+nums[i]) + dfs(i+1, total-nums[i])

		cache[key] = result
		return result
	}

	return dfs(0, 0)
}
