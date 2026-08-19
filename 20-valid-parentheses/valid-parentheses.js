/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = {
        ')': "(",
        '}': "{",
        ']': '['
    }

    let i=0;
    let stack = []
    let check = false;
    while(i<s.length){
        if(map[s[i]]){
            if(map[s[i]] === stack[stack.length-1]){
                stack.pop();
                check = true;
            }else{
                return false;
            }

        }else{
            stack.push(s[i]);
            check = false;
        }
        ++i
    }

    if(stack.length !== 0) return false;
    return check;
};