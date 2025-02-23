package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type FindElements struct {
	seen map[int]bool
}

func Constructor(root *TreeNode) FindElements {
	seen := make(map[int]bool)

	if root != nil {
		root.Val = 0
	}

	var dfs func(node *TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		seen[node.Val] = true
		if node.Left != nil {
			node.Left.Val = node.Val*2 + 1
			dfs(node.Left)
		}
		if node.Right != nil {
			node.Right.Val = node.Val*2 + 2
			dfs(node.Right)
		}
	}
	dfs(root)

	return FindElements{
		seen: seen,
	}
}

func (this *FindElements) Find(target int) bool {
	return this.seen[target]
}

/**
 * Your FindElements object will be instantiated and called as such:
 * obj := Constructor(root);
 * param_1 := obj.Find(target);
 */
