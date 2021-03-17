(function namespace() {

  function merge<T>(left: T[], right: T[]): T[] {
    let sorted = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return sorted.concat(...left, ...right);
  }

  function mergeSort<T>(arr: T[]):T[] {
    const { length } = arr;

    if (length <= 1) return arr;
    const middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle, length));

    return merge(left, right);
  }

  const array1: Array<number> = [5, 43, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 25, 63, 52];

  console.log(mergeSort(array1));

})()