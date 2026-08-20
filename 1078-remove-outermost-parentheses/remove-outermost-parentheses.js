/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let i = 0;
    let count = 0;
    let store = '';
    let stack = []
    while (i < s.length) {
        if (s[i] === '(') {
            stack.push(s[i])
            ++count;
        } else if (s[i] === ')') {
            stack.push(s[i])
            --count;
        }
        if (count === 0) {
            let st = ''
            stack.pop()
            while (stack.length) {
                let popElm = stack.pop()
                if (stack.length !== 0) {
                    st = popElm + st
                }
            }
            store += st;
        }
        ++i
    }
    return store;
};


var removeOuterParentheses = function (s) {
    let stack = []
    let ans = ''
    let i = 0;
    while (i < s.length) {
        if (s[i] === '(') {
            stack.push(s[i])
            let len = stack.length;
            if (len > 1) {
                ans += s[i]
            }
        } else {
            let len = stack.length;
            if (len > 1) {
                ans += s[i]
            }
            stack.pop()
        }
        ++i
    }
    return ans
}