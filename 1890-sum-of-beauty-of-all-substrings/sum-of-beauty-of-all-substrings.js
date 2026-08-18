/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
    let total = 0;

    for (let i = 0; i < s.length; i++) {

        let freq = {}; 
        for (let j = i; j < s.length; j++) {

            let ch = s[j]; 
            if (!freq[ch]) {
                freq[ch] = 1;
            } else {
                freq[ch] += 1;
            }

            let max = -Infinity;
            let min = Infinity;

            for (let key in freq) {
                if (freq[key] > max) {
                    max = freq[key];
                }
                if (freq[key] < min) {
                    min = freq[key];
                }
            }

            total += max - min;
        }
    }

    return total;
};