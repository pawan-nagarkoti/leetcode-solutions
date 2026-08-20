
var MinStack = function () {
    this.stack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
   
    if (this.stack.length === 0) {
         this.stack.unshift([value,value])
    } else {
        let min = this.stack[0][1] < value ? this.stack[0][1] : value
        this.stack.unshift([value,min])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.shift()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[0][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[0][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */