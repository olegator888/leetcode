package main

import "math"

func buildAdj(edges [][]int) map[int][]int {
	adj := make(map[int][]int)
	for _, edge := range edges {
		n1, n2 := edge[0], edge[1]
		adj[n1] = append(adj[n1], n2)
		adj[n2] = append(adj[n2], n1)
	}
	return adj
}

func getDiameter(cur, par int, adj map[int][]int) (int, int) {
	maxD := 0
	firstMax, secondMax := 0, 0

	for _, nei := range adj[cur] {
		if nei == par {
			continue
		}
		neiD, neiMaxLeafPath := getDiameter(nei, cur, adj)
		maxD = int(math.Max(float64(maxD), float64(neiD)))

		if neiMaxLeafPath > firstMax {
			secondMax = firstMax
			firstMax = neiMaxLeafPath
		} else if neiMaxLeafPath > secondMax {
			secondMax = neiMaxLeafPath
		}
	}

	maxD = int(math.Max(float64(maxD), float64(firstMax+secondMax)))
	return maxD, 1 + firstMax
}

func minimumDiameterAfterMerge(edges1, edges2 [][]int) int {
	adj1 := buildAdj(edges1)
	adj2 := buildAdj(edges2)

	d1, _ := getDiameter(0, -1, adj1)
	d2, _ := getDiameter(0, -1, adj2)

	return int(math.Max(float64(d1), math.Max(float64(d2), math.Ceil(float64(d1)/2)+math.Ceil(float64(d2)/2)+1)))
}
