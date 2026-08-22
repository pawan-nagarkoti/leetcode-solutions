/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let arth = ["+", "-", "*", "/"]

    let i = 0;
    let stack = []
    while (i < tokens.length) {
        if (!arth.includes(tokens[i])) {
            stack.push(tokens[i])
        } else {
            let firstElm = stack.pop()
            let secondElm = stack.pop()
            let ans = Math.trunc(eval(`${secondElm}  ${tokens[i]}  ${firstElm}`))
            stack.push(ans)
        }
        ++i
    }
    return Number(stack[stack.length-1])
};