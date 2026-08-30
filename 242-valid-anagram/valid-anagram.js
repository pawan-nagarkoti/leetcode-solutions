/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    let map1 = {};
    let map2 = {}

    let i = 0;
    while (i < s.length) {
        if (!map1[s[i]]) {
            map1[s[i]] = 1
        } else {
            map1[s[i]] += 1
        }
        ++i
    }

    let j = 0;
    while (j < t.length) {
        if (!map2[t[j]]) {
            map2[t[j]] = 1
        } else {
            map2[t[j]] += 1
        }
        ++j
    }


    for (let key in map1) {
        if (map1[key] !== map2[key]) {
            return false
        }
    }

    return true
};


var isAnagram = function (s, t) {
    let map = {}
    let i=0;
    while(i<s.length){
        if(!map[s[i]]){
            map[s[i]] = 1
        }else{
            map[s[i]] += 1
        }
        ++i
    }

    let j=0;
    while(j<t.length){
        if(!map[t[j]]){
            return false
        }else{
            map[t[j]] -= 1
        }
        ++j
    }

    for(let key in map){
        if(map[key] !== 0 ) return false
    }

    return true

}
