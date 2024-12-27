/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func largestValues(root *TreeNode) []int {
	if root == nil {
		return make([]int, 0)
	}
	res := make([]int, 0)
	q := list.New()
	q.PushBack(root)

	for q.Len() > 0 {
		maxVal := math.MinInt
		size := q.Len()
		for i := 0; i < size; i++ {
			node := q.Remove(q.Front()).(*TreeNode)
			maxVal = int(math.Max(float64(maxVal), float64(node.Val)))
			if node.Left != nil {
				q.PushBack(node.Left)
			}
			if node.Right != nil {
				q.PushBack(node.Right)
			}
		}
		res = append(res, maxVal)
	}

	return res
}