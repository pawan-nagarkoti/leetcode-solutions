/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let x = 0;
    let i = 1;
    while (i < nums.length) {
        if (nums[x] === 0 && nums[i] !== 0) {
            nums[x] = nums[i];
            nums[i] = 0
            ++x
        } else if (nums[x] !== 0) {
            ++x
        }
        ++i
    }
};


var moveZeroes = function (nums) {
    let x = 0;
    let i = 1;
    while (i < nums.length) {
        if(nums[x] === 0 && nums[i] !==0){
            nums[x] = nums[i]
            nums[i] = 0
            ++x
        }else if(nums[x] !== 0){
            ++x
        }
        ++i
    }
}