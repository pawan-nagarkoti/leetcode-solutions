/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let ans = [];
    let i = 0;
    while (i < words.length) {
        let st = words[i];
        console.log(st)
        let j = 0;
        while (j < st.length) {
            if (st[j] === x) {
                ans.push(i)
                break;
            }
            ++j
        }
        ++i
    }

    return ans;
};