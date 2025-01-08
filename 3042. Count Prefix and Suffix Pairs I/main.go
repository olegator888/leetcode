package main

func countPrefixSuffixPairs(words []string) int {
	isPrefixAndSuffix := func(str1, str2 string) bool {
		if len(str1) > len(str2) {
			return false
		}
		if len(str1) == len(str2) {
			return str1 == str2
		}

		prefix, suffix := str2[:len(str1)], str2[len(str2)-len(str1):]
		return prefix == suffix
	}

	res := 0

	for i := 0; i < len(words)-1; i++ {
		for j := i + 1; j < len(words); j++ {
			if isPrefixAndSuffix(words[i], words[j]) {
				res++
			}
		}
	}

	return res
}
