package main

import "math"

func mincostTickets(days []int, costs []int) int {
	durations := []int{1, 7, 30}
	cache := make(map[int]int)

	var dfs func(i int) int
	dfs = func(i int) int {
		if i == len(days) {
			return 0
		}

		if cachedVal, exists := cache[i]; exists {
			return cachedVal
		}

		res := math.MaxInt
		for j := range costs {
			cost := costs[j]
			duration := durations[j]
			t := i
			for t < len(days) && days[t] < days[i]+duration {
				t++
			}
			res = int(math.Min(float64(res), float64(cost+dfs(t))))
		}
		cache[i] = res
		return res
	}

	return dfs(0)
}
