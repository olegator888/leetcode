package main

func minimumIndex(nums []int) int {
	cnt := make(map[int]int)
	dominant := 0
	for _, n := range nums {
		cnt[n]++
		if cnt[n] > len(nums)/2 {
			dominant = n
		}
	}

	have := 0
	for i := range nums {
		if nums[i] != dominant {
			continue
		}
		have++
		left := cnt[dominant] - have
		if have > (i+1)/2 && left > (len(nums)-i-1)/2 {
			return i
		}
	}

	return -1
}
