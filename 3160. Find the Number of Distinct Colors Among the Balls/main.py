# total sam

from collections import defaultdict
from typing import List


class Solution:
    def queryResults(self, limit: int, queries: List[List[int]]) -> List[int]:
        ball_to_color = {}
        color_to_balls = defaultdict(int)
        current_colors = 0
        res = []

        for ball, color in queries:
            if ball not in ball_to_color:
                ball_to_color[ball] = color    
                color_to_balls[color] += 1
                if color_to_balls[color] == 1:
                    current_colors += 1
            else:
                old_color = ball_to_color[ball]
                ball_to_color[ball] = color    
                if old_color != color:
                    color_to_balls[color] += 1
                    if color_to_balls[color] == 1:
                        current_colors += 1
                    color_to_balls[old_color] -= 1
                    if color_to_balls[old_color] == 0:
                        current_colors -= 1
            
            res.append(current_colors)

        return res
