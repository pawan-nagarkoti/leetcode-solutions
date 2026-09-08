/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0;
    let balanced = 0;

    let i = 0;
    while (i < s.length) {
        if (s[i] == 'L') {
            ++balanced
        } else {
            --balanced
        }

        if (balanced === 0) {
            ++count
        }
        ++i
    }

    return count
};


var balancedStringSplit = function (s) {
    let ans = 0;
    let count = 0;
    let i=0;
    while(i<s.length){
        if(s[i] === 'R'){
            ++count;
        }else if(s[i]==='L'){
            --count
        }

        if(count === 0){
            ++ans
        }
        ++i
    }

    return ans;
}