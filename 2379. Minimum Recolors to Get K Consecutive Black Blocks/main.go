package main

func minimumRecolors(blocks string, k int) int {
	white := 0
	for i := 0; i < k; i++ {
		if blocks[i] == 'W' {
			white++
		}
	}
	res := white
	for i := k; i < len(blocks); i++ {
		if blocks[i] == 'W' {
			white++
		}
		if blocks[i-k] == 'W' {
			white--
		}
		res = min(res, white)
	}
	return res
}
