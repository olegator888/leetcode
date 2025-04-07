package main

func canPartition(nums []int) bool {
	total := 0
	for _, n := range nums {
		total += n
	}
	if total%2 != 0 {
		return false
	}

	target := total / 2
	dp := make([]bool, target+1)
	dp[0] = true

	for _, n := range nums {
		for j := target; j >= n; j-- {
			if dp[j-n] {
				dp[j] = true
			}
		}
	}
	return dp[target]
}
