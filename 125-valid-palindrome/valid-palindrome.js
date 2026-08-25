/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase()
    let st = ''
    let rev = '';
    let i=s.length-1;
    while(i>=0){
        if(s[i].match(/[a-z0-9]/i)){
            st=s[i] + st;
            rev+=s[i]
        }
        --i
    }
    return st === rev
};