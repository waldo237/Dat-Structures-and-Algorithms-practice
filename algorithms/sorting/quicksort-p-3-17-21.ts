
(function name(): void {

  function swap<T>(arr: T[], a: number, b: number) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  // function partition<T>(items: T[], left: number, right: number) {
  //   let pivot = Math.floor((right + left) / 2), //middle element
  //     L = left, //left pointer
  //     R = right; //right pointer
  //   while (L <= R) {
  //     while (items[L] < items[pivot]) {
  //       L++;
  //     }
  //     while (items[R] > items[pivot]) {
  //       R--;
  //     }
  //     if (L <= R) {
  //       swap(items, L, R); //swap two elements
  //       L++;
  //       R--;
  //     }
  //   }
  //   return L;
  // }
  function partition<T>(items: T[], left: number, right: number): number {
    let pivot = Math.floor((left + right) / 2);
    let l = left;
    let r = right;
    while (l <= r) {
      while (items[l] < items[pivot]) {
        l++;
      }
      while (items[r] > items[pivot]) {
        r--;
      }
      if (l <= r) {
        swap(items, l, r);
        l++;
        r--;
      }
    }
    return l

  }

  function quick<T>(items: T[], left: number, right: number) {
    let pivot;
    if (items.length > 1) {
      pivot = partition(items, left, right); //pivot returned from partition
      if (left < pivot - 1) { //more elements on the left side of the pivot
        quick(items, left, pivot - 1);
      }
      if (pivot < right) { //more elements on the right side of the pivot
        quick(items, pivot, right);
      }
    }
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


(function namespace2(): void {

  function merge<T>(left: T[], right: T[]): T[] {
    let sorted: T[] = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return sorted.concat(...left, ...right);
  }

  function mergeSort<T>(arr: T[]): T[] {
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