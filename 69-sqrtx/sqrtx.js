/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let i = 1;
    while (true) {
        if (x === i * i) {
            return i
        }else if(x < i*i){
            return i-1
        }
        ++i
    }
};