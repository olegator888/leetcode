from typing import List


class Solution:
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        recipes_map = {}
        for i in range(len(recipes)):
            recipes_map[recipes[i]] = ingredients[i]
        supplies_set = set(supplies)

        visit = set()

        def can_create_recipe(recipe):
            if recipe in supplies_set:
                return True
            for ingr in recipes_map[recipe]:
                if ingr in visit:
                    return False
                if ingr in recipes_map:
                    visit.add(ingr)
                    can_create_recipe(ingr)
                    visit.remove(ingr)
                if ingr not in supplies_set:
                    return False
            supplies_set.add(recipe)
            return True
        
        res = []
        for r in recipes:
            if can_create_recipe(r):
                res.append(r)

        return res