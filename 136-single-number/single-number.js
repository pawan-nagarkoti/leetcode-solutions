/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    // let map = {};

    // let i = 0;
    // while (i < nums.length) {
    //     if (map[nums[i]] === undefined) {
    //         map[nums[i]] = 1
    //     } else {
    //         map[nums[i]] += 1
    //     }
    //     ++i
    // }

    // let minKey = Infinity;
    // let keyName;
    // for(let key in map){
    //     if(map[key] < minKey){
    //         minKey = map[key];
    //         keyName = key
    //     }
    // }
   
    // return Number(keyName)



    // a ^ a = 1
    // a ^ 0 = a
    let i=0;
    let xor = 0;
    while(i<nums.length){
        xor = xor ^ nums[i]
        ++i
    }
    return xor;
};

var singleNumber = function (nums) {
    let map = {}
    let i=0;
    while(i<nums.length){
        if(map[nums[i]] === undefined){
            map[nums[i]] = 1
        }else{
            map[nums[i]] += 1
        }
        ++i
    }

    for(let key in map){
        if(map[key] === 1) return Number(key)
    }
}