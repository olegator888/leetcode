from typing import List


class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
        res = set()
        min_removed = float("inf")

        def dfs(i, open, close, cur_str, rem_count):
            nonlocal s
            nonlocal min_removed
            nonlocal res

            if i == len(s):
                if open > close or rem_count > min_removed:
                    return
                possible_ans = "".join(cur_str)
                if rem_count < min_removed:
                    res = set()
                    min_removed = rem_count
                res.add(possible_ans)
                return
            
            if s[i] != ")" and s[i] != "(":
                cur_str.append(s[i])
                dfs(i + 1, open, close, cur_str, rem_count)
                cur_str.pop()
                return
            
            # remove paranthesis
            dfs(i + 1, open, close, cur_str, rem_count + 1)

            # include paranthesis
            cur_str.append(s[i])

            if s[i] == "(":
                dfs(i + 1, open + 1, close, cur_str, rem_count)
            elif close < open:
                dfs(i + 1, open, close + 1, cur_str, rem_count)
            cur_str.pop()

        dfs(0, 0, 0, [], 0)
        return list(res)