class Trie {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }

  add(path) {
    path = path.split("/");
    let cur = this;
    for (const item of path) {
      if (!cur.children[item]) {
        cur.children[item] = new Trie();
      }
      cur = cur.children[item];
    }
    cur.isEnd = true;
  }

  prefixSearch(path) {
    path = path.split("/");
    let cur = this;
    for (let i = 0; i < path.length - 1; i++) {
      cur = cur.children[path[i]];
      if (!cur) break;
      if (cur.isEnd) return true;
    }
    return false;
  }
}

var removeSubfolders = function (folder) {
  const trie = new Trie();
  for (const f of folder) {
    trie.add(f);
  }

  const res = [];

  for (const f of folder) {
    if (!trie.prefixSearch(f)) {
      res.push(f);
    }
  }

  return res;
};
