class Solution:
    def compressedString(self, word: str) -> str:
        comp = []
        i = 0

        while i < len(word):
            initialIndex = i
            while i < len(word) - 1 and word[i] == word[i + 1] and i - initialIndex + 1 < 9:
                i += 1
            comp.append(str(i - initialIndex + 1))
            comp.append(word[i])
            i += 1

        return "".join(comp)