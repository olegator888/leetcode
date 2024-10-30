# total sam

from typing import List

banknotes = [20, 50, 100, 200, 500]

class ATM:

    def __init__(self):
        self.banknotes = [0] * 5        

    def deposit(self, banknotesCount: List[int]) -> None:
        for i in range(len(banknotesCount)):
            self.banknotes[i] += banknotesCount[i]

    def withdraw(self, amount: int) -> List[int]:
        used = [0] * 5

        for banknote in sorted(banknotes, reverse=True):
            i = banknotes.index(banknote)
            willBeUsed = min(amount // banknote, self.banknotes[i])
            amount -= willBeUsed * banknote
            used[i] += willBeUsed
            if amount == 0:
                break

        if amount == 0:
            for i in range(len(used)):
                self.banknotes[i] -= used[i]
            return used    

        return [-1]


# Your ATM object will be instantiated and called as such:
# obj = ATM()
# obj.deposit(banknotesCount)
# param_2 = obj.withdraw(amount)