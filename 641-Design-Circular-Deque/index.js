class Node {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.size = 0;
    this.capacity = k;
    this.left = null;
    this.right = null;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) {
        return false;
    }
    if (this.isEmpty()) {
        this.left = new Node(value);
        this.right = this.left;
    } else {
        this.left.prev = new Node(value, this.left);
        this.left = this.left.prev;
    }

    this.size += 1;
    return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) {
        return false;
    }
    if (this.isEmpty()) {
        this.left = new Node(value);
        this.right = this.left;
    } else {
        this.right.next = new Node(value, null, this.right);
        this.right = this.right.next;
    }

    this.size += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) {
        return false;
    }
    if (this.size === 1) {
        this.left = null;
        this.right = null;
    } else {
        this.left = this.left.next;
    }

    this.size -= 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) {
        return false;
    }
    if (this.size === 1) {
        this.left = null;
        this.right = null;
    } else {
        this.right = this.right.prev;
    }

    this.size -= 1;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    return this.isEmpty() ? -1 : this.left.val;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    return this.isEmpty() ? -1 : this.right.val;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.size === this.capacity;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */