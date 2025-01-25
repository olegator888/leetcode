package main

import (
	"math"
	"sort"
)

func popleft(s *[]int) int {
	val := (*s)[0]
	*s = (*s)[1:]
	return val
}

func sortedCopy(slice []int) []int {
	copySlice := append([]int(nil), slice...)
	sort.Ints(copySlice)
	return copySlice
}

func lexicographicallySmallestArray(nums []int, limit int) []int {
	groups := [][]int{}
	numToGroup := make(map[int]int)

	sorted := sortedCopy(nums)

	for _, n := range sorted {
		if len(groups) == 0 || len(groups[len(groups)-1]) > 0 && math.Abs(float64(groups[len(groups)-1][len(groups[len(groups)-1])-1])-float64(n)) > float64(limit) {
			groups = append(groups, []int{})
		}
		groups[len(groups)-1] = append(groups[len(groups)-1], n)
		numToGroup[n] = len(groups) - 1
	}

	res := []int{}

	for _, n := range nums {
		res = append(res, popleft(&groups[numToGroup[n]]))
	}

	return res
}
