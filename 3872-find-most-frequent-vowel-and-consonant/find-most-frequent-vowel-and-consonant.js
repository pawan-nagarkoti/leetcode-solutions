/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let i = 0;
    let map = {}
    while (i < s.length) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]] += 1
        }
        ++i
    }

    let maxVowelCount = 0;
    let maxConstantCount = 0;

    let j = 0;
    while (j < s.length) {
        if (vowel.includes(s[j])) {
            if (maxVowelCount < map[s[j]]) {
                maxVowelCount = map[s[j]]
            }
        }
        ++j
    }

    let k = 0;
    while (k < s.length) {
        if (!vowel.includes(s[k])) {
            if (maxConstantCount < map[s[k]]) {
                maxConstantCount = map[s[k]]
            }
        }
        ++k
    }

    return maxVowelCount + maxConstantCount
};