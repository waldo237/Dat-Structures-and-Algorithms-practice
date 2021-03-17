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
