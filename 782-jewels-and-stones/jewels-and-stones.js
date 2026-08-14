/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = {}
    let i=0
    while(i<jewels.length){
        map[jewels[i]] = 1
        ++i
    }

    let count = 0;
    let j=0;
    while(j<stones.length){
        if(map[stones[j]]){
            ++count
        }
        ++j
    }
    return count
};