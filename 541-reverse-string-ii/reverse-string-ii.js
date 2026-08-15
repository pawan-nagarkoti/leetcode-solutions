/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let store = '';
    let st = '';
    let count = 0;
    let i = 0;
    let check = true;

    while (i < s.length) {
        if (count <= k && check) {
            ++count;
            st += s[i];
            if (count == k) {
                check = false;
            }
        } else if (!check) {
            --count;
            store += s[i];
            if (count === 0) {
                check = true
            }
        }

        if (count === k) {
            let j = st.length - 1;
            while (j >= 0) {
                store += st[j]
                --j
            }
            st = ''

        }

        ++i

    }

    if (st !== '') {
        let j = st.length - 1;
        while (j >= 0) {
            store += st[j]
            --j
        }
    }

    return store;
};