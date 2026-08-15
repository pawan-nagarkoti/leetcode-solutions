/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const allLetters = [...lowercase, ...uppercase];

    let str = '';
    let i = 0;

    while (i < s.length) {
        console.log(typeof s[i])
        if (allLetters.includes(s[i])) {
            str += s[i].toLowerCase()
        }
        else if (number.includes(s[i])) {
            str += s[i]
        }
        ++i
    }

    let x = 0;
    let k = str.length - 1;
    console.log(str)
    while (x < k) {
        if (str[x] === str[k]) {
            ++x;
            --k
        } else {
            return false;
        }
    }
    return true
};



var isPalindrome = function (s) {
    let str = '';
    let i = 0;
    let rev = ''
    while (i < s.length) {
        if (s[i].match(/[a-z0-9]/i)) {
            str += s[i].toLowerCase();
            rev = s[i].toLowerCase() + rev;
        }

        ++i
    }

    return str === rev
}