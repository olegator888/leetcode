package main

import (
	"slices"
)

func checkValidCuts(n int, rectangles [][]int) bool {
	x := make([][]int, 0)
	y := make([][]int, 0)
	for _, r := range rectangles {
		x = append(x, []int{r[0], r[2]})
		y = append(y, []int{r[1], r[3]})
	}

	slices.SortFunc(x, func(a, b []int) int {
		return a[0] - b[0]
	})
	slices.SortFunc(y, func(a, b []int) int {
		return a[0] - b[0]
	})

	countNonOverlapping := func(intervals [][]int) int {
		count := 0
		prevEnd := -1
		for _, interval := range intervals {
			start, end := interval[0], interval[1]
			if prevEnd <= start {
				count++
			}
			prevEnd = max(prevEnd, end)
		}
		return count
	}

	return countNonOverlapping(x) >= 3 || countNonOverlapping(y) >= 3
}
