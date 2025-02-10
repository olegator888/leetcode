package main

import (
	"strings"
	"unicode"
)

func clearDigits(s string) string {
	stack := make([]string, 0)

	for _, c := range s {
		if !unicode.IsDigit(c) {
			stack = append(stack, string(c))
		} else if len(stack) > 0 {
			stack = stack[:len(stack)-1]
		}
	}

	return strings.Join(stack, "")
}
