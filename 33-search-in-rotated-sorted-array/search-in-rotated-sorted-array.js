/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let map = {}
    let i = 0;
    while (i < nums.length) {
        map[nums[i]] = i
        ++i
    }

    return map[target] || map[target] == 0 ? map[target] : -1
};