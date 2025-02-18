package main

func constructDistancedSequence(n int) []int {
	res := make([]int, 2*n-1)
	used := make(map[int]bool)

	var backtrack func(i int) bool
	backtrack = func(i int) bool {
		if i == len(res) {
			return true
		}

		for num := n; num >= 1; num-- {
			if used[num] {
				continue
			}
			if num > 1 && (i+num >= len(res) || res[i+num] > 0) {
				continue
			}

			used[num] = true
			res[i] = num
			if num > 1 {
				res[i+num] = num
			}

			j := i + 1
			for j < len(res) && res[j] > 0 {
				j++
			}

			if backtrack(j) {
				return true
			}

			used[num] = false
			res[i] = 0
			if num > 1 {
				res[i+num] = 0
			}
		}

		return false
	}

	backtrack(0)

	return res
}
