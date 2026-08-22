/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let ans = []
    let stack = []

    let arr = [...nums, ...nums]
    let n = arr.length - 1;
    stack.push(arr[n]);
    ans.push(-1)

    let i = n - 1;
    while (i >= 0) {
        let top = stack[stack.length - 1]
        if (arr[i] < top) {
            ans.push(top)
            stack.push(arr[i])
        } else if (arr[i] >= top) {
            while (stack.length) {
                if (arr[i] >= stack[stack.length - 1]) {
                    stack.pop()
                } else {
                    ans.push(stack[stack.length - 1]);
                    stack.push(arr[i])
                    break;
                }
            }

            if (stack.length === 0) {
                ans.push(-1);
                stack.push(arr[i])
            }
        }
        --i
    }

    let result = [];
    let j = ans.length - 1;
    while (j >= nums.length) {
        result.push(ans[j])
        --j
    }
    return result

};