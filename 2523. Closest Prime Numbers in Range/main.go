package main

import "math"

func closestPrimes(left int, right int) []int {
	getPrimes := func() []int {
		isPrime := make([]bool, right+1)
		for i := range isPrime {
			isPrime[i] = true
		}
		isPrime[0], isPrime[1] = false, false
		for n := 2; n < len(isPrime); n++ {
			if isPrime[n] == false {
				continue
			}
			for m := n + n; m < len(isPrime); m += n {
				isPrime[m] = false
			}
		}
		primes := make([]int, 0)
		for i := range isPrime {
			if isPrime[i] && i >= left {
				primes = append(primes, i)
			}
		}
		return primes
	}

	primes := getPrimes()
	res := []int{-1, -1}
	diff := math.MaxInt

	for i := 1; i < len(primes); i++ {
		if primes[i]-primes[i-1] < diff {
			diff = primes[i] - primes[i-1]
			res = []int{primes[i-1], primes[i]}
		}
	}

	return res
}
