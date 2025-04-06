package main

import "slices"

func largestDivisibleSubset(nums []int) []int {
	slices.Sort(nums)
	cache := make(map[int][]int)

	var dfs func(i int) []int
	dfs = func(i int) []int {
		if i == len(nums) {
			return []int{}
		}
		if cached, exists := cache[i]; exists {
			return cached
		}
		res := []int{nums[i]}
		for j := i + 1; j < len(nums); j++ {
			if nums[j]%nums[i] == 0 {
				tmp := append([]int{nums[i]}, dfs(j)...)
				if len(tmp) > len(res) {
					res = tmp
				}
			}
		}
		cache[i] = res
		return res
	}

	res := []int{}
	for i := range len(nums) {
		tmp := dfs(i)
		if len(tmp) > len(res) {
			res = tmp
		}
	}
	return res
}
