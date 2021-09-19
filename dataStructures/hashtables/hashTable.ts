// Start of: Linear Probing -----------------------------------
class HashTable<T> {
  size: number;
  keys: Array<T | number | null>;
  values: Array<T | null>;
  limit: number;
  constructor(size: number) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
  }

  private initArray(size: number): Array<T | null> {
    const array: Array<T | null> = [];
    for (let i = 0; i < size; i++) {
      array.push(null);
    }
    return array;
  }

  public put(key: number, value: T | null): void {
    if (this.limit >= this.size) throw "hash table is full";

    let hashedIndex = this.hash(key);

    // Linear probing
    while (this.keys[hashedIndex] != null) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
  }

  public get(key: number): T | null {
    let hashedIndex: T | number | null = this.hash(key);

    while (this.keys[hashedIndex] != key) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }

    return this.values[hashedIndex];
  }

  private hash(key: number): number {
    // Check if int
    // if (!Number.isInteger(key)) throw 'must be int';
    return key % this.size;
  }

  public quadraticPut(key: number, value: T | null): void {
    if (this.limit >= this.size) throw "hash table is full";

    let hashedIndex = this.hash(key),
      squareIndex = 1;

    while (this.keys[hashedIndex % this.size] != null) {
      hashedIndex += Math.pow(squareIndex, 2);
      squareIndex++;
    }

    this.keys[hashedIndex % this.size] = key;
    this.values[hashedIndex % this.size] = value;
    this.limit++;
  }

  public quadraticGet(key: number): T | null {
    let hashedIndex = this.hash(key),
      squareIndex = 1;

    while (this.keys[hashedIndex % this.size] != key) {
      hashedIndex += Math.pow(squareIndex, 2);
      hashedIndex = hashedIndex % this.size;
      squareIndex++;
    }
    return this.values[hashedIndex % this.size];
  }

  public doublePut(key: number, value: T | null): void {
    if (this.limit >= this.size) throw "hash table is full";

    let hashedIndex = this.doubleHash(key);

    while (this.keys[hashedIndex] != null) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
  }

  public doubleGet(key: number): T | null {
    let hashedIndex = this.doubleHash(key);

    while (this.keys[hashedIndex] != key) {
      hashedIndex++;
      hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
  }

  private doubleHash(key: number) {
    if (!Number.isInteger(key)) throw "must be int"; // check if int
    return this.secondHash(key);
  }

  secondHash(hashedKey: number) {
    var R = this.size - 2;
    return R - (hashedKey % R);
  }
}

const exampletable = new HashTable<string>(13);
console.time("normalPut");
exampletable.put(7, "hi");
console.timeEnd("normalPut");

console.time("quadraric Put");
exampletable.quadraticPut(20, "hello");
console.timeEnd("quadraric Put");

console.time("double Put");
exampletable.doublePut(33, "sunny");
console.timeEnd("double Put");

exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "fourty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");

// console.log(exampletable)

console.time("normal get");
exampletable.get(7);
console.timeEnd("normal get");

console.time("quadraric get");
exampletable.quadraticGet(20);
console.timeEnd("quadraric get");

console.time("double get");
exampletable.doubleGet(33);
console.timeEnd("double get");
