/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2)

        if (target === nums[m]) {
            return m
        } else if (nums[l] <= nums[m]) { // left side sorted
            if (target < nums[m] && target >= nums[l]) {
                r = m - 1
            } else {
                l = m + 1
            }
        } else { // right side sorted
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
    }
    return -1
};