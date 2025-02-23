package main

import (
	"strconv"
	"strings"
)

func smallestNumber(pattern string) string {
	stack, res := make([]int, 0), make([]string, len(pattern)+1)

	for i := 0; i < len(pattern)+1; i++ {
		stack = append(stack, i+1)

		for len(stack) > 0 && (i == len(pattern) || pattern[i] == 'I') {
			res = append(res, strconv.Itoa(stack[len(stack)-1]))
			stack = stack[:len(stack)-1]
		}
	}

	return strings.Join(res, "")
}
