package main

func numTilePossibilities(tiles string) int {
	count := make(map[rune]int)
	for _, c := range tiles {
		count[c]++
	}

	var backtrack func() int
	backtrack = func() int {
		res := 0
		for c := range count {
			if count[c] == 0 {
				continue
			}
			count[c]--
			res++
			res += backtrack()
			count[c]++
		}
		return res
	}

	return backtrack()
}
