package main

import (
	"math"
	"strings"
)

func getHappyString(n int, k int) string {
	totalHappy := 3 * int(math.Pow(2.0, float64(n-1)))

	// If k is greater than total number of happy strings, return empty string
	if k > totalHappy {
		return ""
	}

	res := make([]string, 0, n)
	choices := "abc"
	left, right := 1, totalHappy

	for i := 0; i < n; i++ {
		cur := left
		partitionSize := (right - left + 1) / len(choices)

		for _, c := range choices {
			if k >= cur && k < cur+partitionSize {
				res = append(res, string(c))
				left = cur
				right = cur + partitionSize - 1
				choices = strings.ReplaceAll("abc", string(c), "")
				break
			}
			cur += partitionSize
		}
	}

	return strings.Join(res, "")
}
