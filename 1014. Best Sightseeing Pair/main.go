package main

import "math"

func maxScoreSightseeingPair(values []int) int {
	res := 0
	cur_max := values[0] - 1

	for i := 1; i < len(values); i++ {
		res = int(math.Max(float64(res), float64(values[i]+cur_max)))
		cur_max = int(math.Max(float64(cur_max-1), float64(values[i]-1)))
	}

	return res
}
