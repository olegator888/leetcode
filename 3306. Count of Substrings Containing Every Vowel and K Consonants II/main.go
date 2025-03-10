package main

func countOfSubstrings(word string, k int) int64 {
	atleastk := func(k int) int {
		vowels := map[rune]bool{'a': true, 'e': true, 'i': true, 'o': true, 'u': true}
		vowel := make(map[rune]int)
		nonVowel := 0
		res := 0
		l := 0
		for r, char := range word {
			if vowels[char] {
				vowel[char]++
			} else {
				nonVowel++
			}
			for len(vowel) == 5 && nonVowel >= k {
				res += len(word) - r
				if vowels[rune(word[l])] {
					vowel[rune(word[l])]--
					if vowel[rune(word[l])] == 0 {
						delete(vowel, rune(word[l]))
					}
				} else {
					nonVowel--
				}
				l++
			}
		}
		return res
	}
	return int64(atleastk(k) - atleastk(k+1))
}
