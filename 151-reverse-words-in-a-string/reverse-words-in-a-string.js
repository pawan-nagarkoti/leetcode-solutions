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