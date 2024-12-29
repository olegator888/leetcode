package main

func ord(letter rune) int {
	return int(letter - 'a')
}

func numWays(words []string, target string) int {
	const MOD = 1000000007
	cache := make(map[[2]int]int)
	charFrequency := make([][26]int, len(words[0]), len(words[0]))
	for i := range words {
		for j := range len(words[0]) {
			charFrequency[j][ord(rune(words[i][j]))] += 1
		}
	}

	var getWords func(wordsIndex, targetIndex int) int
	getWords = func(wordsIndex, targetIndex int) int {
		if targetIndex == len(target) {
			return 1
		}
		if wordsIndex == len(words[0]) || len(words[0])-wordsIndex < len(target)-targetIndex {
			return 0
		}

		cacheKey := [2]int{wordsIndex, targetIndex}

		if cachedVal, exists := cache[cacheKey]; exists {
			return cachedVal
		}

		count_ways := 0
		cur_pos := ord(rune(target[targetIndex]))

		// skip current word
		count_ways += getWords(wordsIndex+1, targetIndex)

		// use current word's char
		count_ways += charFrequency[wordsIndex][cur_pos] * getWords(wordsIndex+1, targetIndex+1)

		cache[cacheKey] = count_ways % MOD
		return cache[cacheKey]
	}

	return getWords(0, 0)
}
