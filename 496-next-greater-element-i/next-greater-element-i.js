/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    if (nums2.length === 0) {
        return []
    }
    let n = nums2.length - 1;

    let stack = []
    stack.push(nums2[n]);

    let map = {}
    map[nums2[n]] = -1

    let i = n
    while (i >= 0) {
        let top = stack[stack.length - 1]
        if (nums2[i] < top) {
            map[nums2[i]] = top;
            stack.push(nums2[i])
        } else if (nums2[i] > top) {
            // let check = true;
            // while (stack.length) {
            //     if (nums2[i] > stack[stack.length - 1]) {
            //         stack.pop()
            //     } else {
            //         map[nums2[i]] = stack[stack.length - 1];
            //         check = false;
            //         stack.push(nums2[i])
            //         break;
            //     }
            // }

            // if (check) {
            //     map[nums2[i]] = -1;
            //     stack.push(nums2[i])
            // }

            while (nums2[i] > stack[stack.length - 1] && stack.length) {
                stack.pop()
            }

            let isTop = stack[stack.length - 1] ? stack[stack.length - 1] : -1
            map[nums2[i]] = isTop;
            stack.push(nums2[i])
        }
        --i
    }

    console.log(map)

    let ans = []
    let j = 0;
    while (j < nums1.length) {
        ans.push(map[nums1[j]])
        ++j
    }

    return ans
};