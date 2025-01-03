package main

func sum(nums []int) int {
	res := 0
	for _, n := range nums {
		res += n
	}
	return res
}

func waysToSplitArray(nums []int) int {
	total := sum(nums)
	res := 0
	cur := 0

	for _, n := range nums[:len(nums)-1] {
		cur += n
		if cur >= total-cur {
			res++
		}
	}

	return res
}
