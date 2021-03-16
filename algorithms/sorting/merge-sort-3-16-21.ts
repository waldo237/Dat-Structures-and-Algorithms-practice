function merge<T>(left:T[], right:T[]) {
  let rIndex = 0,
   lIndex = 0;
  const sorted:T[]=[];

  while (left.length && right.length) {
    sorted.push(left[lIndex] < right[rIndex]? left[lIndex++]:right[rIndex++]);
  }
  return sorted;
}

function mergeSort<T>(array:T[]) {
  
}
const array1:Array<number> = [5, 43, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 25, 63, 52];

console.log(ms(array1));