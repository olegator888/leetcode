/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const canCook = {};
  for (const s of supplies) {
    canCook[s] = true;
  }
  const recipeIndex = {};
  for (let i = 0; i < recipes.length; i++) {
    recipeIndex[recipes[i]] = i;
  }

  const dfs = (r) => {
    if (canCook[r] !== undefined) return canCook[r];
    if (recipeIndex[r] === undefined) return false;

    canCook[r] = false; // handle circle

    for (const ingr of ingredients[recipeIndex[r]]) {
      if (!dfs(ingr)) return false;
    }

    canCook[r] = true;
    return true;
  };

  return recipes.filter(dfs);
};
