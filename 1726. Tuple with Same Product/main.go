package main

func tupleSameProduct(nums []int) int {
	productCnt := make(map[int]int)
	pairCnt := make(map[int]int)

	for i := range len(nums) {
		for j := i + 1; j < len(nums); j++ {
			product := nums[i] * nums[j]
			pairCnt[product] += productCnt[product]
			productCnt[product] += 1
		}
	}

	res := 0
	for _, cnt := range pairCnt {
		res += 8 * cnt
	}

	return res
}
