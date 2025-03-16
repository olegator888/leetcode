package main

import "math"

func repairCars(ranks []int, cars int) int64 {
	countRepaired := func(time int) int {
		count := 0
		for _, r := range ranks {
			count += int(math.Sqrt(float64(time / r)))
		}
		return count
	}
	l, r := 0, ranks[0]*cars*cars
	res := -1
	for l <= r {
		m := (l + r) / 2
		if countRepaired(m) >= cars {
			res = m
			r = m - 1
		} else {
			l = m + 1
		}
	}
	return int64(res)
}
