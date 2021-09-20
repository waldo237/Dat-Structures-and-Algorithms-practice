const exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.add(2); // exampleSet: Set(2) {1, 2}
exampleSet;

function intersectSets<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const intersection: Set<T> = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}
const set1 = new Set<number>([1, 2, 3, 4]),
  set2 = new Set<number>([2, 3]);
intersectSets(set1, set2); // Set {2, 3}

function isSuperset<T>(setA: Set<T>, subset: Set<T>): boolean {
  for (let elem of subset) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

const set3 = new Set([1, 2, 3, 4]),
  set4 = new Set([2, 3]),
  set5 = new Set([5]);
isSuperset(set3, set4);

function unionSet<T>(setA: Set<T>, setB: Set<T>) {
  const union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  return union;
}
const setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([5]);

unionSet(setA, setB);

unionSet(setA, setC);

function differenceSet<T>(setA: Set<T>, setB: Set<T>) {
  const difference = new Set(setA);
  for (let elem of setB) {
    difference.delete(elem);
  }
  return difference;
}
const setAA = new Set([1, 2, 3, 4]),
  setBB = new Set([2, 3]);
differenceSet<number>(setAA, setBB); // Set(2) {1, 4}

// Exercises
// Question 1
function checkDuplicates<T>(arr: Array<T>): boolean {
  const mySet = new Set(arr);
  return mySet.size < arr.length;
}
checkDuplicates([1, 2, 3, 4, 5]); // false
checkDuplicates([1, 1, 2, 3, 4, 5]); // true

// Question 2
function uniqueList<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  const mySet = new Set(arr1.concat(arr2));
  return Array.from(mySet);
}
uniqueList([1, 1, 2, 2], [2, 3, 4, 5]); // [1,2,3,4,5]
uniqueList([1, 2], [3, 4, 5]); // [1,2,3,4,5]
uniqueList([], [2, 2, 3, 4, 5]); // [2,3,4,5]
