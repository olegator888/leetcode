package main

import "strings"

func vowelStrings(words []string, queries [][]int) []int {
	isValid := func(word string) int {
		vowels := "aeiou"
		isValid := strings.ContainsRune(vowels, rune(word[0])) && strings.ContainsRune(vowels, rune(word[len(word)-1]))
		if isValid {
			return 1
		}
		return 0
	}

	prefix := make([]int, len(words)+1)

	for i, w := range words {
		prefix[i+1] = prefix[i] + isValid(w)
	}

	res := make([]int, len(queries))
	for i, q := range queries {
		l, r := q[0], q[1]
		res[i] = prefix[r+1] - prefix[l]
	}

	return res
}
