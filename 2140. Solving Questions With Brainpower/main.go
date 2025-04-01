package main

func mostPoints(questions [][]int) int64 {
	cache := make(map[int]int)

	var dfs func(i int) int
	dfs = func(i int) int {
		if i >= len(questions) {
			return 0
		}
		if val, exists := cache[i]; exists {
			return val
		}

		include := questions[i][0] + dfs(i+questions[i][1]+1)
		skip := dfs(i + 1)
		cache[i] = max(include, skip)
		return cache[i]
	}

	return int64(dfs(0))
}
