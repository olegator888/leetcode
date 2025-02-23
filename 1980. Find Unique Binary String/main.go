package main

func findDifferentBinaryString(nums []string) string {
	n := len(nums)
	numsMap := make(map[string]bool)
	for _, n := range nums {
		numsMap[n] = true
	}
	var dfs func(str string) string
	dfs = func(str string) string {
		if numsMap[str] {
			return ""
		}
		if len(str) == n {
			return str
		}
		if res := dfs(str + "1"); res != "" {
			return res
		}
		return dfs(str + "0")
	}
	return dfs("")
}
