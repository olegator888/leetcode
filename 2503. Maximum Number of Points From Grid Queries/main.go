package main

import (
	"container/heap"
	"slices"
)

type MinHeap [][]int

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i][0] < h[j][0] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x any) {
	*h = append(*h, x.([]int))
}

func (h *MinHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func maxPoints(grid [][]int, queries []int) []int {
	queriesSorted := make([][]int, len(queries))
	for i, q := range queries {
		queriesSorted[i] = []int{q, i}
	}
	slices.SortFunc(queriesSorted, func(a, b []int) int {
		return a[0] - b[0]
	})

	directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	n, m := len(grid), len(grid[0])
	count := 0
	ans := make([]int, len(queries))
	visit := make(map[[2]int]bool)
	minHeap := &MinHeap{}

	heap.Init(minHeap)
	heap.Push(minHeap, []int{grid[0][0], 0, 0})
	visit[[2]int{0, 0}] = true

	for _, item := range queriesSorted {
		q, idx := item[0], item[1]

		for minHeap.Len() > 0 && (*minHeap)[0][0] < q {
			node := heap.Pop(minHeap).([]int)
			r, c := node[1], node[2]
			count++

			for _, d := range directions {
				row, col := r+d[0], c+d[1]

				if row < 0 || col < 0 || row >= n || col >= m || visit[[2]int{row, col}] {
					continue
				}

				visit[[2]int{row, col}] = true
				heap.Push(minHeap, []int{grid[row][col], row, col})
			}
		}

		ans[idx] = count
	}

	return ans
}
