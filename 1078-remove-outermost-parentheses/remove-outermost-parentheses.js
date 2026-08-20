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
            store +=st;
        }
        ++i
    }
    return store;
};