/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let storeCount = 0;
    let count = 0;
    let i = 0;
    while (i < s.length) {
        if (s[i] !== ' ') {
            ++count
        } else {
            if (count != 0) {
                storeCount = count;
            }
            count = 0;
        }
        ++i
    }

    if (count != 0) {
        storeCount = count;
    }

    return storeCount
};