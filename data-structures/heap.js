"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxHeap = exports.MinHeap = void 0;
var util_1 = require("../util");
var MinHeap = /** @class */ (function () {
    function MinHeap(compareFn) {
        if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
        this.compareFn = compareFn;
        this.heap = [];
    }
    MinHeap.prototype.getLeftIndex = function (index) {
        return 2 * index + 1;
    };
    MinHeap.prototype.getRightIndex = function (index) {
        return 2 * index + 2;
    };
    MinHeap.prototype.getParentIndex = function (index) {
        if (index === 0) {
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    };
    MinHeap.prototype.size = function () {
        return this.heap.length;
    };
    MinHeap.prototype.isEmpty = function () {
        return this.size() <= 0;
    };
    MinHeap.prototype.clear = function () {
        this.heap = [];
    };
    MinHeap.prototype.findMinimum = function () {
        return this.isEmpty() ? undefined : this.heap[0];
    };
    MinHeap.prototype.insert = function (value) {
        if (value != null) {
            var index = this.heap.length;
            this.heap.push(value);
            this.siftUp(index);
            return true;
        }
        return false;
    };
    MinHeap.prototype.siftDown = function (index) {
        var element = index;
        var left = this.getLeftIndex(index);
        var right = this.getRightIndex(index);
        var size = this.size();
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) === util_1.Compare.BIGGER_THAN) {
            element = left;
        }
        if (right < size &&
            this.compareFn(this.heap[element], this.heap[right]) === util_1.Compare.BIGGER_THAN) {
            element = right;
        }
        if (index !== element) {
            util_1.swap(this.heap, index, element);
            this.siftDown(element);
        }
    };
    MinHeap.prototype.siftUp = function (index) {
        var parent = this.getParentIndex(index);
        while (index > 0 &&
            this.compareFn(this.heap[parent], this.heap[index]) === util_1.Compare.BIGGER_THAN) {
            util_1.swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    };
    MinHeap.prototype.extract = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() === 1) {
            return this.heap.shift();
        }
        var removedValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return removedValue;
    };
    MinHeap.prototype.heapify = function (array) {
        if (array) {
            this.heap = array;
        }
        var maxIndex = Math.floor(this.size() / 2) - 1;
        for (var i = 0; i <= maxIndex; i++) {
            this.siftDown(i);
        }
        return this.heap;
    };
    MinHeap.prototype.getAsArray = function () {
        return this.heap;
    };
    return MinHeap;
}());
exports.MinHeap = MinHeap;
var MaxHeap = /** @class */ (function (_super) {
    __extends(MaxHeap, _super);
    function MaxHeap(compareFn) {
        if (compareFn === void 0) { compareFn = util_1.defaultCompare; }
        var _this = _super.call(this, compareFn) || this;
        _this.compareFn = compareFn;
        _this.compareFn = util_1.reverseCompare(compareFn);
        return _this;
    }
    return MaxHeap;
}(MinHeap));
exports.MaxHeap = MaxHeap;
