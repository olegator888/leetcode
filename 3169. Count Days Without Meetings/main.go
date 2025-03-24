package main

import "slices"

func countDays(days int, meetings [][]int) int {
	slices.SortFunc(meetings, func(a, b []int) int {
		return a[0] - b[0]
	})

	prevEnd := 0

	for _, m := range meetings {
		start, end := m[0], m[1]
		start = max(start, prevEnd+1)
		length := end - start + 1
		days -= max(length, 0)
		prevEnd = max(prevEnd, end)
	}

	return days
}
