"use strict";
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data, next) {
        if (next === void 0) { next = null; }
        this.next = next;
        this.data = data;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.append = function (data) {
        var newNode = new LinkedListNode(data, null);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    };
    /**
     * @function prepend add a value to the beginning of the list
     * @param {T}data the value you want to add to the beginning
     */
    LinkedList.prototype.prepend = function (data) {
        var newNode = new LinkedListNode(data, this.head); //add the head to the next value
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    };
    /**
     * search: finds the first value that is specified in the parameters
     * @param {T} value value that is being queried
     */
    LinkedList.prototype.search = function (value) {
        var currentNode = this.head, results = [];
        while (currentNode) {
            if (currentNode.data === value) {
                results.push(currentNode.data);
            }
            currentNode = currentNode.next;
        }
        return results;
    };
    /**
     * delete
     * @param {T} value the data that needs to be deleted.
     * @returns {string} message indicating the results of the operation
     */
    LinkedList.prototype.delete = function (value) {
        var deletedData = [];
        if (!this.head)
            return "There are not values in the list";
        if (this.head.data === value) {
            if (this.head === this.tail) {
                deletedData.push(this.head.data);
                this.head, this.tail = null;
            }
            else {
                deletedData.push(this.head.data);
                this.head = this.head.next;
            }
        }
        var currentNode = this.head;
        while (currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) {
            if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.next.data) === value) {
                deletedData.push(currentNode.next.data);
                currentNode.next = currentNode.next.next;
                console.log("this is a delete value: " + JSON.stringify(currentNode));
                if (currentNode.next === this.tail) {
                    this.tail.next = null;
                    this.tail = currentNode;
                }
            }
            currentNode = currentNode.next;
        }
        return (deletedData.length) ? "deleted values: " + deletedData.join(', ') : value + " was not found in the list";
    };
    return LinkedList;
}());
(function namespace() {
    var list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(2);
    list.append(2);
    list.delete(2);
    console.log(list.delete(2));
    console.log(JSON.stringify(list));
})();
