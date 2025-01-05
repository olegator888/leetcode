package main

func countPalindromicSubsequence(s string) int {
	res := make(map[[2]rune]bool)
	left := make(map[rune]bool)
	right := make(map[rune]int)

	for _, c := range s {
		right[c]++
	}

	for _, m := range s {
		right[m]--

		for c := range left {
			if right[c] > 0 {
				res[[2]rune{m, c}] = true
			}
		}

		left[m] = true
	}

	return len(res)
}
