class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        used = set()

        def dfs(i, cur, visit):
            used.add(cur)
            visit.add(i)
            for j in range(len(tiles)):
                if j in visit: continue
                dfs(j, cur + tiles[j], visit)
            visit.remove(i)    
        
        for i in range(len(tiles)):
            dfs(i, tiles[i], set())

        return len(used)