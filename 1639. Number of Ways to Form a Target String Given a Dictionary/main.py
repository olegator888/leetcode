from typing import List


class Solution:
    def numWays(self, words: List[str], target: str) -> int:
        MOD = 1000000007
        dp = {}
        char_frequency = [[0] * 26 for _ in range(len(words[0]))]

        for i in range(len(words)):
            for j in range(len(words[0])):
                char_frequency[j][ord(words[i][j]) - 97] += 1

        def get_words(words_index, target_index):
            if target_index == len(target):
                return 1
            
            if words_index == len(words[0]) or len(words[0]) - words_index < len(target) - target_index:
                return 0
            
            if (words_index, target_index) in dp:
                return dp[(words_index, target_index)]
            
            count_ways = 0
            cur_pos = ord(target[target_index]) - 97
            
            # skip current word
            count_ways += get_words(words_index + 1, target_index)

            # use current word
            count_ways += char_frequency[words_index][cur_pos] * get_words(words_index + 1, target_index + 1)

            dp[(words_index, target_index)] = count_ways % MOD
            return dp[(words_index, target_index)]
        
        return get_words(0, 0)

        