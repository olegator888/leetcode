package main

func numberOfAlternatingGroups(colors []int, k int) int {
	n := len(colors)
	res := 0
	l := 0

	for r := 1; r < n+k-1; r++ {
		if colors[r%n] == colors[(r-1)%n] {
			l = r
		}
		if r-l+1 == k {
			res++
			l++
		}
	}

	return res
}
