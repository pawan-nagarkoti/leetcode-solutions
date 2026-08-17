/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    let i = 0;
    let map = {}
    let result = []

    while (i < strs.length) {
        let s = strs[i].split('').sort().join('');
        if (!map[s]) {
            map[s] = [strs[i]]
        } else {
            map[s].push(strs[i])
        }
        ++i
    }

    for(let key in map){
        result.push(map[key])
    }

    return result
}