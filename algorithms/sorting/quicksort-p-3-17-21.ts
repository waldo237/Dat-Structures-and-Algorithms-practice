
(function name():void {
  
  function swap(array: any[], a: number, b: number) {
   const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    // [array[a], array[b]] = [array[b], array[a]];
  }
  
  function partition<T>(items: T[], left: number, right: number) {
    const pivot = Math.floor(left + right / 2);
    let L = left;
    let R = right;
  
    while (L <= R) {
      while (items[L] < items[pivot]) {
        L++;
      }
  
      while (items[R] > items[pivot]) {
        R--;
      }
  
      if (L <= R) {
        swap(items, L, R);
        L++;
        R--;
      }
    }
    return L;
  }
  
  
  function quick<T>(items: T[], left: number, right: number) {

    let pivot = partition(items, left, right);
  
    if (left < pivot - 1) {
      quick(items, left, pivot - 1)
    }else if (right > pivot){
       quick(items, pivot, right) 
    };
  
    return items;
  }
  
  function quickSort<T>(items: T[]) {
    return quick(items, 0, items.length - 1);
  };
  
  const array1: Array<number> = [5, 43, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 25, 63, 52];
  console.time('quickSort')
  console.log(quickSort(array1));
  console.timeEnd('quickSort')
})();


(function namespace2():void {

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
 
  console.time('mergeSort')
  console.log(mergeSort(array1));
  console.timeEnd('mergeSort')  

})();