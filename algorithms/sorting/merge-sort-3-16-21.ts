import { mergeSort as ms} from './merge-sort'
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

function mergeSort<T>(array: T[]): T[] {
  const { length } = array;

  if (length <= 1) return array;
  const middle = Math.floor(length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle, length));

  return merge(left, right);

}

const array1:Array<number> = [5, 43, 8, 3, 1, 9, 1, 3, 2, 7, 23, 32, 25, 63, 52];

console.log(mergeSort(array1));