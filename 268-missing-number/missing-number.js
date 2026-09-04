/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // nums.sort((a,b)=> a-b)
    // let i=0;
    // while(i<nums.length){
    //     if(i!=nums[i]){
    //         return i
    //     }
    //     ++i
    // }
    // return nums[nums.length-1]+1


    let n = nums.length;
    let sum = Math.floor((n * (n + 1)) / 2);
    let totalSum = 0;

    let i = 0;
    while (i < nums.length) {
        totalSum += nums[i]
        ++i
    }

    return Math.abs(totalSum - sum)
};

var missingNumber = function (nums) {
    let n = nums.length;
    let sum = Math.floor((n * (n+1)) /2)
    let total = 0
    let x =0;
    while(x<n){
        total+=nums[x]
        ++x
    }
    return Math.abs(total-sum)
}