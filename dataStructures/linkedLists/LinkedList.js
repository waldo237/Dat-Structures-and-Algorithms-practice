"use strict";
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data, next) {
        this.data = data;
        this.next = next;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    /**
     * append
     * @param {T} data
     */
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
     * prepend
     * @param {T} data
     */
    LinkedList.prototype.prepend = function (data) {
        var newNode = new LinkedListNode(data, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    };
    /**
     * search
     * @param {T} value
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
     * @param {T} value
     */
    LinkedList.prototype.delete = function (value) {
        var _a, _b;
        var currentNode = this.head, results = [];
        if (!this.head) {
            return null;
        }
        if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.data) === value) {
            results.push(currentNode.data);
            this.head = currentNode.next;
        }
        while (currentNode) {
            if (((_a = currentNode.next) === null || _a === void 0 ? void 0 : _a.data) === value) {
                currentNode.next = (_b = currentNode.next) === null || _b === void 0 ? void 0 : _b.next;
                // if(!currentNode.next?.next && currentNode.next === this.tail){
                //     this.tail =   null;
                // }
            }
            currentNode = currentNode.next;
        }
        return results;
    };
    LinkedList.prototype.print = function () {
        var currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    };
    return LinkedList;
}());
(function namespace() {
    var list = new LinkedList();
    list.append('uno');
    list.append('dos');
    list.append('dos');
    list.append('tres');
    list.append('cuatro');
    list.append('cinco');
    list.prepend('zero');
    list.delete('uno');
    // list.delete('dos')
    // list.delete('dos')
    list.delete('tres');
    list.delete('cuatro');
    list.delete('cinco');
    list.delete('zero');
    // Promise.resolve(console.log(list.delete('zero')))
    console.log(JSON.stringify(list));
    console.log(list.print());
})();


if (authenticate) {
    loginToPorta();
 }

 
 authenticate && loginToPorta();