package main

func findAllRecipes(recipes []string, ingredients [][]string, supplies []string) []string {
	canCook := make(map[string]bool)
	for _, s := range supplies {
		canCook[s] = true
	}
	recipeIndex := make(map[string]int)
	for i, r := range recipes {
		recipeIndex[r] = i
	}

	var dfs func(r string) bool
	dfs = func(r string) bool {
		if val, exists := canCook[r]; exists {
			return val
		}
		if _, exists := recipeIndex[r]; !exists {
			return false
		}

		canCook[r] = false // handle circle

		for _, ingr := range ingredients[recipeIndex[r]] {
			if !dfs(ingr) {
				return false
			}
		}

		canCook[r] = true
		return true
	}

	res := make([]string, 0)

	for _, r := range recipes {
		if dfs(r) {
			res = append(res, r)
		}
	}

	return res
}
