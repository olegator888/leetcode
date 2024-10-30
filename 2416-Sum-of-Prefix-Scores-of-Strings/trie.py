from typing import List

class Trie:
    def __init__(self) -> None:
        self.children = {}
        self.count = 0

    def insert(self, word):
        cur = self
        for c in word:
            if c not in cur.children:
                cur.children[c] = Trie()
            cur.children[c].count += 1
            cur = cur.children[c]
    
    def countPrefixScore(self, prefix):
        cur = self
        score = 0
        for c in prefix:
            if c not in cur.children:
                break
            score += cur.children[c].count
            cur = cur.children[c]
        return score


class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
        trie = Trie()

        for w in words:
            trie.insert(w)
        
        res = []

        for w in words:
            res.append(trie.countPrefixScore(w))

        return res
