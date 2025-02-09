package main

func countBadPairs(nums []int) int64 {
	totalPairs := 0
	goodPairs := 0
	count := make(map[int]int)

	for i := range len(nums) {
		totalPairs += i
		goodPairs += count[nums[i]-i]
		count[nums[i]-i]++
	}

	return int64(totalPairs - goodPairs)
}
