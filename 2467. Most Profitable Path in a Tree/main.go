package main

import "math"

func mostProfitablePath(edges [][]int, bob int, amount []int) int {
	adj := make(map[int][]int)
	for _, edge := range edges {
		v1, v2 := edge[0], edge[1]
		adj[v1] = append(adj[v1], v2)
		adj[v2] = append(adj[v2], v1)
	}

	bobTimes := make(map[int]int)
	var bobTravel func(node, prev, time int) bool
	bobTravel = func(node, prev, time int) bool {
		if node == 0 {
			bobTimes[node] = time
			return true
		}
		for _, nei := range adj[node] {
			if nei == prev {
				continue
			}
			if bobTravel(nei, node, time+1) {
				bobTimes[node] = time
				return true
			}
		}
		return false
	}
	bobTravel(bob, -1, 1)

	var aliceTravel func(node, prev, time, profit int) int
	aliceTravel = func(node, prev, time, profit int) int {
		if len(adj[node]) == 1 && adj[node][0] == prev {
			return profit
		}
		res := math.MinInt
		for _, nei := range adj[node] {
			if nei == prev {
				continue
			}
			neiTime, neiProfit := time+1, amount[nei]
			if bobTimes[nei] > 0 {
				if bobTimes[nei] < neiTime {
					neiProfit = 0
				}
				if bobTimes[nei] == neiTime {
					neiProfit /= 2
				}
			}
			res = max(res, aliceTravel(nei, node, neiTime, profit+neiProfit))
		}
		return res
	}

	return aliceTravel(0, math.MinInt, 1, amount[0])
}
