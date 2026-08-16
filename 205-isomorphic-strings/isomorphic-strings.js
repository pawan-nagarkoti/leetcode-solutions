/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isValueUsed(map, checkValue, excludeKey) {
    for (let key in map) {
        if (key !== excludeKey && map[key] === checkValue) {
            return true;
        }
    }
    return false;
}

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    let map = {};
    let i = 0;

    while (i < s.length) {
        if (map[s[i]] === undefined) {
            if (isValueUsed(map, t[i], s[i])) {
                return false
            }
            map[s[i]] = t[i]
        }
        else if (map[s[i]] !== t[i]) {
            return false;
        }
        ++i
    }

    return true
};