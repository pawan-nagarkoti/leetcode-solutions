/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let x = 0;
    let i = 1;

    while (i < nums.length) {
        if (nums[x] !== nums[i]) {
            ++x;
            nums[x] = nums[i]
        }
        ++i
    }

    // nums.length = x +1

    return x+1;
};

var removeDuplicates = function (nums) {
    let x=0;
    let i=0;
    while(i<nums.length){
        if(nums[x] !== nums[i]){
            nums[x+1] = nums[i]
            ++x
        }
        ++i
    }
    return ++x
}