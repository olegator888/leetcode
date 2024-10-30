class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
        s = expression
        i = 0

        def helper():
            nonlocal i

            cur = s[i]
            i += 1

            if cur == "t":
                return True
            if cur == "f":
                return False
            if cur == "!":
                i += 1
                res = not helper()
                i += 1
                return res
            
            children = []
            i += 1
            while s[i] != ")":
                if s[i] != ",":
                    children.append(helper())
                else:    
                  i += 1
            i += 1
            if cur == "&":
                return all(children)
            if cur == "|":          
                return any(children)

        return helper()    