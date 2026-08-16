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


var longestCommonPrefix = function (strs) {
    let x = 0;
    while(x<strs[0].length){
        let ch = strs[0][x]
        let j=1
        while(j<strs.length){
            if(ch !== strs[j][x]){
                return strs[0].substring(0,x)
            }
            ++j
        }
        ++x
    }

    return strs[0]
}