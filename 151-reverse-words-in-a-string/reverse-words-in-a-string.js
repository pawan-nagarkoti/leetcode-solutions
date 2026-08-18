/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let st = s.split(' ');
    let newSt = []
    let i = st.length - 1;
    while (i >= 0) {
        if (st[i] !== '') {
            newSt.push(st[i]);
        }
        --i
    }

    return newSt.join(' ')
}


var reverseWords = function (s) {
    let st = [];
    let k=0;
    let p = ''
    let check= false

    // create custom split method
    while(k<s.length){
        if(s[k] !== ' '){
            p+=s[k]
            check = true
        }
        if(check && s[k] == ' '){
            st.push(p)
            p=''
            check = false
        }
        ++k
    }

    if(p !== ''){
        st.push(p)
    }

    let newSt = []
    let i = st.length - 1;
    while (i >= 0) {
        if (st[i] !== '') {
            newSt.push(st[i]);
        }
        --i
    }

    return newSt.join(' ')
}