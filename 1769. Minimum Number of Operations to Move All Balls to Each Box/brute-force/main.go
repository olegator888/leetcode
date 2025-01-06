package main

import "math"

func minOperations(boxes string) []int {
	res := make([]int, len(boxes))

	for i := range boxes {
		total := 0
		for j := range boxes {
			if i == j {
				continue
			}
			if boxes[j] == '1' {
				total += int(math.Abs(float64(i - j)))
			}
		}
		res[i] = total
	}

	return res
}
