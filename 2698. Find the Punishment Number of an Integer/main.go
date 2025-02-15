package main

import "strconv"

func partition(i, cur, target int, str string) bool {
	if i == len(str) && cur == target {
		return true
	}
	for j := i; j < len(str); j++ {
		num, _ := strconv.Atoi(str[i : j+1])
		if partition(j+1, cur+num, target, str) {
			return true
		}
	}
	return false
}

func punishmentNumber(n int) int {
	res := 0
	for i := 1; i <= n; i++ {
		if partition(0, 0, i, strconv.Itoa(i*i)) {
			res += i * i
		}
	}
	return res
}
