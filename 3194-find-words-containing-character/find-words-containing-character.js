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

function check(str,value){
    let i=0;
    while(i<str.length){
        if(str[i] === value){
            return true
        }
        ++i
    }
    return false
}

var findWordsContaining = function (words, x) {
    let i=0
    let ans = []
    while(i<words.length){
        // if(words[i].split('').includes(x)){
        if(check(words[i],x)){
            ans.push(i)
        }
        ++i
    }

    return ans
}