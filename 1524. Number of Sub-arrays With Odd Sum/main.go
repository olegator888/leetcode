package main

import "math"

func numOfSubarrays(arr []int) int {
	curSum, evenCnt, oddCnt, res, MOD := 0, 0, 0, 0, int(math.Pow(10.0, 9.0))+7

	for _, n := range arr {
		curSum += n

		if curSum%2 == 1 {
			res = (res + 1 + evenCnt) % MOD
			oddCnt++
		} else {
			res = (res + oddCnt) % MOD
			evenCnt++
		}
	}

	return res
}
