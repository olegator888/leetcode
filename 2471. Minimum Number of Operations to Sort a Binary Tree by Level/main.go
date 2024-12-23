package main

import (
	"container/list"
	"sort"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func minimumOperations(root *TreeNode) int {
	countSwaps := func(nums []int) int {
		swaps := 0
		sortedNums := make([]int, len(nums))
		copy(sortedNums, nums)
		sort.Ints(sortedNums)
		idxMap := make(map[int]int)

		for i, n := range nums {
			idxMap[n] = i
		}

		for i := 0; i < len(nums); i++ {
			if nums[i] != sortedNums[i] {
				swaps++
				j := idxMap[sortedNums[i]]
				nums[i], nums[j] = nums[j], nums[i]
				idxMap[nums[j]] = j
			}
		}

		return swaps
	}

	res := 0
	q := list.New()
	q.PushBack(root)

	for q.Len() > 0 {
		level := []int{}
		size := q.Len()

		for i := 0; i < size; i++ {
			node := q.Remove(q.Front()).(*TreeNode)
			level = append(level, node.Val)

			if node.Left != nil {
				q.PushBack(node.Left)
			}

			if node.Right != nil {
				q.PushBack(node.Right)
			}
		}

		res += countSwaps(level)
	}

	return res
}
