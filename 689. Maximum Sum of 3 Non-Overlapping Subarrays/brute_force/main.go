package main

func maxSumOfThreeSubarrays(nums []int, k int) []int {
	max_sum, res := 0, []int{}

	var backtrack func(i int, chosen []int)
	backtrack = func(i int, chosen []int) {
		if len(chosen) == 3 {
			cur_sum := 0
			for _, j := range chosen {
				for t := j; t < j+k; t++ {
					cur_sum += nums[t]
				}
			}
			if cur_sum > max_sum {
				max_sum = cur_sum
				res = append([]int{}, chosen...)
			}
			return
		}

		if i > len(nums)-k {
			return
		}

		// chose i
		chosen = append(chosen, i)
		backtrack(i+k, chosen)
		chosen = chosen[:len(chosen)-1]

		// skip i
		backtrack(i+1, chosen)
	}

	backtrack(0, []int{})

	return res
}
