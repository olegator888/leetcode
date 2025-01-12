package main

func canConstruct(s string, k int) bool {
	if len(s) < k {
		return false
	}
	sCount := make(map[rune]int)
	for _, c := range s {
		sCount[c]++
	}
	oddCount := 0
	for _, v := range sCount {
		if v%2 > 0 {
			oddCount++
		}
	}
	return oddCount <= k
}
