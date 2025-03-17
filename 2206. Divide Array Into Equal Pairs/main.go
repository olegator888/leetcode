package main

func divideArray(nums []int) bool {
	cnt := make(map[int]int)
	for _, n := range nums {
		cnt[n]++
	}
	for _, v := range cnt {
		if v%2 > 0 {
			return false
		}
	}
	return true
}
