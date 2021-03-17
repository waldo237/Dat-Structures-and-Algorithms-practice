import { Compare, defaultCompare, ICompareFunction, swap } from '../../util';

function partition(array: any[], left: number, right: number) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }

  return i;
};

function partitionP<T>(items: T[], left: number, right: number) {
  const pivot = items[Math.floor(left + right / 2)];
  let L = left;
  let R = right;

  while (L <= R) {
    while (items[L] < pivot) {
      L++;
    }

    while (items[R] > pivot) {
      R--;
    }
    
    if (L <= R) {
      swap(items, L, R);
      L++;
      R--;
    }
  }
}

function quick<T>(array: T[], left: number, right: number) {
  let index;

  if (array.length > 1) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quick(array, left, index - 1);
    }

    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
};

export function quickSort<T>(array: T[]) {
  return quick(array, 0, array.length - 1);
};
