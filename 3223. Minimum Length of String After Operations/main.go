package main

import "maps"

func minimumLength(s string) int {
	cnt := make(map[rune]int)

	for _, c := range s {
		cnt[c]++
	}

	deleted := 0
	for freq := range maps.Values(cnt) {
		if freq%2 == 0 {
			deleted += freq - 2
		} else {
			deleted += freq - 1
		}
	}

	return len(s) - deleted
}
