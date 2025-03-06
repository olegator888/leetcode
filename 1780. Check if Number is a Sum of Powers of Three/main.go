package main

import "math"

func checkPowersOfThree(n int) bool {
	i := 0.0
	for math.Pow(3.0, i+1.0) <= float64(n) {
		i++
	}
	for i >= 0 {
		power := math.Pow(3.0, i)
		if power <= float64(n) {
			n -= int(power)
		}
		i--
	}
	return n == 0
}
