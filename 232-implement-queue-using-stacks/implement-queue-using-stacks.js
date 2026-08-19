
var MyQueue = function () {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.s2.length !== 0) {
        return this.s2.pop()
    } else {
        let n = this.s1.length;
        let i = 0
        while (i < n - 1) {
            this.s2.push(this.s1.pop());
            ++i
        }

        return this.s1.pop()
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.s2.length !== 0) {
        return this.s2[this.s2.length - 1]
    } else {
        let n = this.s1.length;
        let i = 0;
        while (i < n - 1) {
            this.s2.push(this.s1.pop())
            ++i
        }
        let topElm = this.s1[this.s1.length - 1];
        this.s2.push(this.s1.pop())
        return topElm;
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0 && this.s2.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */