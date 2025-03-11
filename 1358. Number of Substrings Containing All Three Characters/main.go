package main

func numberOfSubstrings(s string) int {
	res := 0
	l := 0
	cnt := make(map[rune]int)

	for r, char := range s {
		cnt[char]++
		for len(cnt) == 3 {
			res += len(s) - r
			lChar := rune(s[l])
			cnt[lChar]--
			if cnt[lChar] == 0 {
				delete(cnt, lChar)
			}
			l++
		}
	}

	return res
}
