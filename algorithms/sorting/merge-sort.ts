import { Compare, defaultCompare, ICompareFunction } from '../../util';

function merge<T>(left: T[], right: T[]) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    result.push(left[i]<right[j] ? left[i++] : right[j++]);
  }

  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

export function mergeSort<T>(array: T[]): T[] {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    array = merge(left, right);
  }
  return array;
}
