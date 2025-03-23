package main

import (
	"container/heap"
	"math"
)

type Heap [][]int

func (h Heap) Len() int           { return len(h) }
func (h Heap) Less(i, j int) bool { return h[i][0] < h[j][0] }
func (h Heap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *Heap) Push(x any) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.([]int))
}

func (h *Heap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func countPaths(n int, roads [][]int) int {
	adj := make(map[int][][]int)
	for _, r := range roads {
		u, v, w := r[0], r[1], r[2]
		adj[u] = append(adj[u], []int{v, w})
		adj[v] = append(adj[v], []int{u, w})
	}

	minCost := make([]int, n)
	for i := range n {
		minCost[i] = math.MaxInt
	}
	pathCount := make([]int, n)
	pathCount[0] = 1

	MOD := int(math.Pow(10, 9) + 7)

	h := &Heap{}
	h.Push([]int{0, 0})

	for h.Len() > 0 {
		item := heap.Pop(h).([]int)
		cost, node := item[0], item[1]

		for _, neiItem := range adj[node] {
			nei, neiCost := neiItem[0], neiItem[1]
			newCost := cost + neiCost
			if newCost < minCost[nei] {
				minCost[nei] = newCost
				pathCount[nei] = pathCount[node]
				heap.Push(h, []int{newCost, nei})
			} else if newCost == minCost[nei] {
				pathCount[nei] = (pathCount[nei] + pathCount[node]) % MOD
			}
		}
	}

	return pathCount[n-1]
}
