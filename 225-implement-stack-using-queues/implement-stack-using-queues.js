//  // using two queue
// var MyStack = function () {
//     this.q1 = []
//     this.q2 = []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//     this.q1.push(x)
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//     let n = this.q1.length;
//     let i = 0;
//     while (i < n - 1) {
//         this.q2.push(this.q1.shift())
//         ++i
//     }
//     let popElm = this.q1.shift()

//     let temp = this.q1;
//     this.q1 = this.q2;
//     this.q2 = temp;

//     return popElm;
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//     let n = this.q1.length;
//     let i = 0;
//     while (i < n - 1) {
//         this.q2.push(this.q1.shift())
//         ++i
//     }
//     let topElm = this.q1[0];
//     this.q2.push(this.q1.shift())

//     let temp = this.q1;
//     this.q1 = this.q2;
//     this.q2 = temp;

//     return topElm;
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//     return this.q1.length === 0
// };

// /** 
//  * Your MyStack object will be instantiated and called as such:
//  * var obj = new MyStack()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.empty()
//  */




// implement stack uisng one queue
var MyStack = function () {
    this.q = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.q.length;
    let i = 0;
    while (i < n - 1) {
        this.q.push(this.q.shift())
        ++i
    }
    let popElm = this.q.shift()
    return popElm
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q.length;
    let i = 0;
    while (i < n - 1) {
        this.q.push(this.q.shift())
        ++i
    }
    let popElm =  this.q[0]
    this.q.push(this.q.shift())
    return popElm
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q.length === 0
};