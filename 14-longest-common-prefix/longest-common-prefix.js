/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let longP = strs[0]
    let i = 1;
    while (i < strs.length) {
        let st = '';
        let j = 0;
        while (j < strs[i].length) {
            if (longP[j] !== strs[i][j]) {
                break;
            }
            st += strs[i][j]
            ++j
        }
        longP = st;
        st = ''
        ++i
    }
    return longP;
};