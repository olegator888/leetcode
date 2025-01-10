package main

func counter(str string) map[rune]int {
	cnt := make(map[rune]int)

	for _, c := range str {
		cnt[c]++
	}

	return cnt
}

func wordSubsets(words1 []string, words2 []string) []string {
	count_2 := make(map[rune]int)

	for _, w := range words2 {
		for key, value := range counter(w) {
			count_2[key] = max(count_2[key], value)
		}
	}

	res := []string{}

	for _, w := range words1 {
		flag := true

		cnt := counter(w)

		for key, value := range count_2 {
			if cnt[key] < value {
				flag = false
				break
			}
		}

		if flag {
			res = append(res, w)
		}
	}

	return res
}
