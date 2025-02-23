/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    nums = new Set(nums);
    const dfs = (str) => {
        if (nums.has(str)) return "";
        if (str.length === n) return str; 
        return dfs(str + "1") || dfs(str + "0")
    }
    return dfs("")
};