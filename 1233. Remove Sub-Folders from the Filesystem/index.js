/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  const folderSet = new Set(folder);

  const res = [];

  for (const f of folder) {
    res.push(f);
    for (let i = 0; i < f.length; i++) {
      if (f[i] === "/" && folderSet.has(f.slice(0, i))) {
        res.pop();
        break;
      }
    }
  }

  return res;
};
