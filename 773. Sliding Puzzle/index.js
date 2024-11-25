/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const adj = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4],
  };

  const b = board.reduce((acc, cur) => [...acc, ...cur], []).join("");
  const visit = new Set([b]);
  const q = [[b.indexOf("0"), b, 0]];

  while (q.length > 0) {
    const [i, b, length] = q.shift();

    if (b === "123450") return length;

    const b_arr = Array.from(b);
    for (const j of adj[i]) {
      const new_b_arr = [...b_arr];
      [new_b_arr[i], new_b_arr[j]] = [new_b_arr[j], new_b_arr[i]];
      const new_b = new_b_arr.join("");
      if (!visit.has(new_b)) {
        q.push([j, new_b, length + 1]);
        visit.add(new_b);
      }
    }
  }

  return -1;
};
