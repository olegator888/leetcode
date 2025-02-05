package main

func areAlmostEqual(s1 string, s2 string) bool {
	indexes := make([]int, 0)

	for i := range len(s1) {
		if s1[i] != s2[i] {
			indexes = append(indexes, i)
		}
		if len(indexes) > 2 {
			return false
		}
	}

	if len(indexes) == 2 {
		i, j := indexes[0], indexes[1]
		return s1[i] == s2[j] && s1[j] == s2[i]
	}

	return len(indexes) == 0
}
