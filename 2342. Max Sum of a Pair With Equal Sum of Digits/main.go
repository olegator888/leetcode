package main

import (
	"container/heap"
)

type MaxHeap []int

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *MaxHeap) Push(x any) {
	*h = append(*h, x.(int))
}

func (h *MaxHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func maximumSum(nums []int) int {
	groups := make(map[int]*MaxHeap)

	getIntegerSum := func(n int) int {
		res := 0
		for n > 0 {
			res += n % 10
			n /= 10
		}
		return res
	}

	for _, n := range nums {
		group := getIntegerSum(n)
		if groups[group] == nil {
			groups[group] = &MaxHeap{}
		}
		heap.Push(groups[group], n)
	}

	res := 0

	for _, items := range groups {
		if items.Len() < 2 {
			continue
		}
		x, y := heap.Pop(items), heap.Pop(items)
		res = max(res, x.(int)+y.(int))
	}

	if res == 0 {
		return -1
	}

	return res
}
