/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let n = temperatures.length - 1
    let stack = []
    let ans = []
    stack.push([temperatures[n], n])
    ans.push(0)

    let i = n - 1
    while (i >= 0) {
        if (temperatures[i] < stack[stack.length - 1][0]) {
            ans.push(stack[stack.length - 1][1] - i)
        } else if (temperatures[i] >= stack[stack.length - 1][0]) {
            while (stack.length) {
                if (temperatures[i] >= stack[stack.length - 1][0]) {
                    stack.pop()
                } else {
                    ans.push(stack[stack.length - 1][1] - i)
                    break;
                }
            }
            if (stack.length === 0) {
                ans.push(0)
            }
        }
        stack.push([temperatures[i], i])
        --i
    }
    return ans.reverse();
};