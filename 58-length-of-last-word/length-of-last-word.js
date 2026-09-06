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

var lengthOfLastWord = function (s) {
    let i=s.length-1;
    let count = 0;
    let check = false;
    while(i>=0){
        if(s[i] !== ' ') check = true
        if(s[i] !== ' ' && check){
            ++count
        }

        if(s[i] === ' ' && check){
            break;
        }
        --i
    }

    return count
}