package main

func maximumCandies(candies []int, k int64) int {
	total := 0
	for _, c := range candies {
		total += c
	}
	if total < int(k) {
		return 0
	}

	l, r := 1, total/int(k)
	res := 0

	for l <= r {
		m := (l + r) / 2
		cnt := 0

		for _, c := range candies {
			cnt += c / m
			if cnt >= int(k) {
				break
			}
		}

		if cnt >= int(k) {
			res = max(res, m)
			l = m + 1
		} else {
			r = m - 1
		}
	}

	return res
}
