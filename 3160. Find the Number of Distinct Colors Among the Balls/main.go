// total sam

package main

func queryResults(limit int, queries [][]int) []int {
	ballToColor := make(map[int]int)
	colorToBalls := make(map[int]int)
	currentColors := 0
	res := make([]int, len(queries))

	for i, q := range queries {
		ball, color := q[0], q[1]

		_, exists := ballToColor[ball]

		if !exists {
			ballToColor[ball] = color
			colorToBalls[color]++
			if colorToBalls[color] == 1 {
				currentColors++
			}
		} else {
			oldColor := ballToColor[ball]
			ballToColor[ball] = color
			if oldColor != color {
				colorToBalls[color]++
				if colorToBalls[color] == 1 {
					currentColors++
				}
				colorToBalls[oldColor]--
				if colorToBalls[oldColor] == 0 {
					currentColors--
				}
			}
		}
		res[i] = currentColors
	}

	return res
}
