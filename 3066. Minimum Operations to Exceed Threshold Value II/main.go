package main

import "container/heap"

type MinHeap []int

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x any) {
	*h = append(*h, x.(int))
}

func (h *MinHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func minOperations(nums []int, k int) int {
	h := &MinHeap{}
	for _, n := range nums {
		heap.Push(h, n)
	}

	operations := 0

	for (*h)[0] < k {
		x, y := heap.Pop(h).(int), heap.Pop(h).(int)
		heap.Push(h, min(x, y)*2+max(x, y))
		operations++
	}

	return operations
}
