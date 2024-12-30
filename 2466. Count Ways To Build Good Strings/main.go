package main

func countGoodStrings(low int, high int, zero int, one int) int {
	cache := make(map[int]int)

	var getStrings func(length int) int
	getStrings = func(length int) int {
		if length > high {
			return 0
		}

		if cachedVal, exists := cache[length]; exists {
			return cachedVal
		}

		val := 0
		if length >= low && length <= high {
			val = 1
		}

		cache[length] = (val + getStrings(length+one) + getStrings(length+zero)) % 1000000007

		return cache[length]
	}

	return getStrings(0)
}
