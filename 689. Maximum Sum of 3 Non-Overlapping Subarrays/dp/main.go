package main

func maxSumOfThreeSubarrays(nums []int, k int) []int {
	// Preprocessing: Calculate all k-sums
	kSums := make([]int, len(nums)-k+1)
	sum := 0
	for i := 0; i < k; i++ {
		sum += nums[i]
	}
	kSums[0] = sum
	for i := k; i < len(nums); i++ {
		sum += nums[i] - nums[i-k]
		kSums[i-k+1] = sum
	}

	// Memoization table
	dp := make(map[[2]int]int)

	// Helper function to compute the maximum sum using dynamic programming
	var getMaxSum func(i, cnt int) int
	getMaxSum = func(i, cnt int) int {
		if cnt == 3 || i > len(kSums)-1 {
			return 0
		}
		if val, exists := dp[[2]int{i, cnt}]; exists {
			return val
		}

		// Include current k-sum
		include := kSums[i] + getMaxSum(i+k, cnt+1)
		// Skip current index
		skip := getMaxSum(i+1, cnt)

		// Store and return the result
		dp[[2]int{i, cnt}] = max(include, skip)
		return dp[[2]int{i, cnt}]
	}

	// Helper function to reconstruct the indices
	getIndices := func() []int {
		indices := []int{}
		i := 0
		for i <= len(kSums)-1 && len(indices) < 3 {
			include := kSums[i] + getMaxSum(i+k, len(indices)+1)
			skip := getMaxSum(i+1, len(indices))

			if include >= skip {
				indices = append(indices, i)
				i += k
			} else {
				i++
			}
		}
		return indices
	}

	// Get the indices
	return getIndices()
}

// Helper function to compute the max of two integers
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
