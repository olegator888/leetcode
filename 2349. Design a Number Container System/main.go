package main

import "container/heap"

type MinHeap []int

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *MinHeap) Push(x any) {
	*h = append(*h, x.(int))
}

func (h *MinHeap) Top() int {
	return (*h)[0]
}

func (h *MinHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

type NumberContainers struct {
	indexToNumber   map[int]int
	numberToIndices map[int]*MinHeap
}

func Constructor() NumberContainers {
	return NumberContainers{
		indexToNumber:   make(map[int]int),
		numberToIndices: make(map[int]*MinHeap),
	}
}

func (this *NumberContainers) Change(index int, number int) {
	this.indexToNumber[index] = number
	if this.numberToIndices[number] == nil {
		this.numberToIndices[number] = &MinHeap{}
	}
	heap.Push(this.numberToIndices[number], index)
}

func (this *NumberContainers) Find(number int) int {
	_, exists := this.numberToIndices[number]
	if !exists {
		return -1
	}
	for this.numberToIndices[number].Len() > 0 {
		index := this.numberToIndices[number].Top()
		if this.indexToNumber[index] == number {
			return index
		}
		heap.Pop(this.numberToIndices[number])
	}
	return -1
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Change(index,number);
 * param_2 := obj.Find(number);
 */
