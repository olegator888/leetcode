// total sam

package main

import "strings"

func removeOccurrences(s string, part string) string {
	stack := make([]string, 0)

	partRunes := []rune(part)

	checkStack := func() bool {
		if len(stack) < len(part) {
			return false
		}
		start := len(stack) - len(part)
		for i := start; i < len(stack); i++ {
			if stack[i] != string(partRunes[i-start]) {
				return false
			}
		}
		return true
	}

	for _, c := range s {
		stack = append(stack, string(c))
		if checkStack() {
			stack = stack[:len(stack)-len(part)]
		}
	}

	return strings.Join(stack, "")
}
