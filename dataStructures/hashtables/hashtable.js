const assert = require('assert').strict;

assert.do
function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
    if (this.limit >= this.size) throw 'hash table is full'

    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != null) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function (key) {
    const hashedIndex = this.hash(key);
    while (this.keys[hashedIndex] != key) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;

    }
    return this.values[hashedIndex];
}

HashTable.prototype.hash = function (key) {
    if (!Number.isInteger(key)) throw 'must be int'; // check if int
    return this.secondHash(key % this.size);
}
HashTable.prototype.secondHash = function (hashedKey) {
    const R = this.size - 2;
    return R - hashedKey % R;
}
HashTable.prototype.initArray = function (size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}

const exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(85, "fine");
exampletable.put(98, "sad");

try {
    console.log(exampletable);

} catch (error) {
    console.log(error)
}