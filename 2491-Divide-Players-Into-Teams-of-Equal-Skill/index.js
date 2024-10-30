// total sam

/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  const totalSkill = skill.reduce((acc, cur) => acc + cur, 0);
  const pairsAmount = skill.length / 2;
  const pairSkill = totalSkill / pairsAmount;

  const count = {};
  for (const item of skill) {
    count[item] = (count[item] || 0) + 1;
  }

  let res = 0;
  for (const item of skill) {
    if (!count[item]) continue;

    const diff = pairSkill - item;
    if (!count[diff]) return -1;

    res += item * diff;
    count[diff] -= 1;
    count[item] -= 1;
  }

  return res;
};
