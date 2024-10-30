
// total sam

const idxMap = {
    20: 0,
    50: 1,
    100: 2,
    200: 3,
    500: 4
}

var ATM = function () {
    this.banknotes = Array(5).fill(0);
};

/** 
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function (banknotesCount) {
    for (let i = 0; i < banknotesCount.length; i++) {
        this.banknotes[i] += banknotesCount[i];
    }
};

/** 
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function (amount) {
    const usedBanknotes = Array(5).fill(0);
    const sortedBanknotes = Object.keys(idxMap).sort((a, b) => b - a);

    for (const banknote of sortedBanknotes) {
        const i = idxMap[banknote]
        const willBeUsedAmount = Math.min(Math.floor(amount / banknote), this.banknotes[i]);
        usedBanknotes[i] += willBeUsedAmount;
        amount -= willBeUsedAmount * banknote;
        if (amount === 0) break;
    }

    if (amount === 0) {
        for (let i = 0; i < 5; i++) {
            this.banknotes[i] -= usedBanknotes[i];
        }
        return usedBanknotes;
    }

    return [-1];
};

/** 
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */