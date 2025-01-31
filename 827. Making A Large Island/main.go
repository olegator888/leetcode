package main

func largestIsland(grid [][]int) int {
	n := len(grid)

	outOfBounds := func(r, c int) bool {
		return r < 0 || c < 0 || r == n || c == n
	}

	var dfs func(r, c, label int) int
	dfs = func(r, c, label int) int {
		if outOfBounds(r, c) || grid[r][c] != 1 {
			return 0
		}
		grid[r][c] = label
		size := 1
		nei := [][2]int{{r - 1, c}, {r + 1, c}, {r, c - 1}, {r, c + 1}}
		for _, item := range nei {
			nr, nc := item[0], item[1]
			size += dfs(nr, nc, label)
		}
		return size
	}

	size := make(map[int]int)
	label := 2
	for r := range n {
		for c := range n {
			if grid[r][c] == 1 {
				size[label] = dfs(r, c, label)
				label++
			}
		}
	}

	connect := func(r, c int) int {
		visit := make(map[int]bool)
		nei := [][2]int{{r - 1, c}, {r + 1, c}, {r, c - 1}, {r, c + 1}}
		res := 1
		for _, item := range nei {
			nr, nc := item[0], item[1]
			if outOfBounds(nr, nc) || grid[nr][nc] == 0 || visit[grid[nr][nc]] {
				continue
			}
			res += size[grid[nr][nc]]
			visit[grid[nr][nc]] = true
		}
		return res
	}

	res := 1
	for r := range n {
		for c := range n {
			if grid[r][c] == 0 {
				res = max(res, connect(r, c))
			} else {
				res = max(res, size[grid[r][c]])
			}
		}
	}

	return res
}
