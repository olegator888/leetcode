package main

func includes(str, substr string) bool {
	n1, n2 := len(str), len(substr)
	if n2 > n1 {
		return false
	}

	for i := range n1 - n2 + 1 {
		match := true

		for j := range n2 {
			if str[i+j] != substr[j] {
				match = false
				break
			}
		}

		if match {
			return true
		}
	}

	return false
}

func stringMatching(words []string) []string {
	res := []string{}

	for i := 0; i < len(words); i++ {
		for j := 0; j < len(words); j++ {
			if i == j {
				continue
			}
			if includes(words[j], words[i]) {
				res = append(res, words[i])
				break
			}
		}
	}

	return res
}
