package main

func longestNiceSubarray(nums []int) int {
	res := 1
	cur := 0
	l := 0
	for r := range len(nums) {
		for cur&nums[r] != 0 {
			cur = cur ^ nums[l]
			l++
		}
		res = max(res, r-l+1)
		cur = cur | nums[r]
	}
	return res
}
