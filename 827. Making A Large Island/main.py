# total sam

from typing import List


class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        # find all islands
        # for each island cell replace 1 with island size
        # for each 0 cell look 4 directions, sum up numbers
        # create map coord -> island_id to avoid counting same island multiple times

        n = len(grid)
        directions = [(-1, 0), (0, -1), (1, 0), (0, 1)]
        coord_to_island = {}
        island_id = 0

        # bfs find island, replace all one's with island's size
        def mark_island(r, c):
            nonlocal island_id
            visit = set([(r, c)])
            q = [(r, c)]
            island_size = 0
            while q:
                r, c = q.pop()
                island_size += 1
                for dr, dc in directions:
                    row, col = r + dr, c + dc
                    if row not in range(n) or col not in range(n) or (row, col) in visit or grid[row][col] == 0:
                        continue
                    q.append((row, col))
                    visit.add((row, col))
            for r, c in visit:
                grid[r][c] = island_size
                coord_to_island[(r, c)] = island_id
            island_id += 1
        
        for r in range(n):
            for c in range(n):
                if grid[r][c] == 1:
                    mark_island(r, c)
        
        res = 1

        # get potential island size for 0 cell 
        def get_potential_island_size(r, c):
            res = 1
            included_islands = set()
            for dr, dc in directions:
                row, col = r + dr, c + dc
                if row not in range(n) or col not in range(n) or grid[row][col] == 0: continue
                cur_island = coord_to_island[(row, col)]
                if cur_island in included_islands: continue
                res += grid[row][col]
                included_islands.add(cur_island)    
            return res
        
        for r in range(n):
            for c in range(n):
                if grid[r][c] == 0:
                    res = max(res, get_potential_island_size(r, c))
                else:
                    res = max(res, grid[r][c])    

        return res
