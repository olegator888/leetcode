package main

import (
	"strings"
)

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func maxScore(s string) int {
	ones := strings.Count(s, "1")
	zeros := 0
	res := 0

	for i := 0; i < len(s)-1; i++ {
		if s[i] == '0' {
			zeros++
		} else {
			ones--
		}
		res = max(res, zeros+ones)
	}

	return res
}
