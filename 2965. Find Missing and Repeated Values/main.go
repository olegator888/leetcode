package main

func findMissingAndRepeatedValues(grid [][]int) []int {
	n := len(grid)
	cnt := make(map[int]int)
	for _, row := range grid {
		for _, n := range row {
			cnt[n]++
		}
	}
	double, missing := 0, 0
	for i := 1; i < n*n+1; i++ {
		if cnt[i] == 0 {
			missing = i
		}
		if cnt[i] == 2 {
			double = i
		}
	}
	return []int{double, missing}
}
