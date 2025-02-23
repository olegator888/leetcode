package main

import "strconv"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func recoverFromPreorder(traversal string) *TreeNode {
	stack := make([]*TreeNode, 0)
	dashes, i := 0, 0

	for i < len(traversal) {
		if traversal[i] == '-' {
			dashes++
			i++
			continue
		}
		j := i
		for j < len(traversal) && traversal[j] != '-' {
			j++
		}
		val, _ := strconv.Atoi(traversal[i:j])
		node := &TreeNode{Val: val}

		for len(stack) > dashes {
			stack = stack[:len(stack)-1]
		}

		if len(stack) > 0 && stack[len(stack)-1].Left == nil {
			stack[len(stack)-1].Left = node
		} else if len(stack) > 0 {
			stack[len(stack)-1].Right = node
		}

		stack = append(stack, node)
		dashes = 0
		i = j
	}

	return stack[0]
}
