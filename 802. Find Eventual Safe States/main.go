package main

func eventualSafeNodes(graph [][]int) []int {
	n := len(graph)
	safe := make(map[int]bool)
	res := []int{}

	var dfs func(i int) bool
	dfs = func(i int) bool {
		if len(graph[i]) == 0 {
			return true
		}

		if val, ok := safe[i]; ok {
			return val
		}

		safe[i] = false

		for _, nei := range graph[i] {
			if !dfs(nei) {
				return false
			}
		}

		safe[i] = true
		return true
	}

	for i := 0; i < n; i++ {
		if dfs(i) {
			res = append(res, i)
		}
	}

	return res
}
