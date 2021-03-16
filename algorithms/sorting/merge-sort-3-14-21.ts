
function merge<T>(left: T[], right: T[]): Array<T | undefined> {
  let sorted: Array<T | undefined> = [];
  while (left.length && right.length) {
     (left[0] < right[0])
     ?sorted.push(left.shift())
     :sorted.push(right.shift());
  };
  return  sorted.concat(...left, ...right)
}

 
function mergeSort<T>(array: T[]): Array<T | undefined> {
  const { length } = array;
  if (length <= 1) return array;
  const middle = Math.floor(length / 2),
    left = mergeSort(array.slice(0, middle)),
    right = mergeSort(array.slice(middle, length));

  return merge(left, right);
}


let arr: Array<number> = [2, 6, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 54, 63, 77];

console.log(mergeSort(arr));