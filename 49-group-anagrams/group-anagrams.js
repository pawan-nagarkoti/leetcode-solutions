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

    for (let key in map) {
        result.push(map[key])
    }

    return result
}

var groupAnagrams = function (strs) {
    let i = 0
    let s = []
    while (i < strs.length) {
        s.push(strs[i].split('').sort().join(''))
        ++i
    }

    let map = {}
    let j=0
    while(j<s.length){
        if(!map[s[j]]){
            map[s[j]] = [strs[j]]
        }else{
            map[s[j]].push(strs[j])
        }
        ++j
    }

    let ans = []
    for(let key in map){
        ans.push(map[key])
    }
    return ans
}