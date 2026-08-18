/**
 * @param {string} s
 * @return {number}
 */

function countF(freq) {
    let max = -Infinity;
    let min = +Infinity;

    for (let c = 0; c < 26; c++) {
        if (freq[c] > 0) {
            if (freq[c] > max) max = freq[c];
            if (freq[c] < min) min = freq[c];
        }
    }

    return max - min;
}

var beautySum = function (s) {
    let count = 0;
    let i = 0;

    while (i < s.length) {
        let map = new Array(26).fill(0); 
        let j = i;

        while (j < s.length) {
            map[s.charCodeAt(j) - 97] += 1; 
            count += countF(map);  
            ++j;
        }
        ++i;
    }

    return count;
};