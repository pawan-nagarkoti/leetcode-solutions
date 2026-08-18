/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let stack = []
    let i = 0;
    while (i < s.length) {
        if (stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop();
        }else{
            stack.push(s[i])
        }
        ++i
    }

    let count = 0;
    while (stack.length) {
        ++count;
        stack.pop()
    }
    return count;
};