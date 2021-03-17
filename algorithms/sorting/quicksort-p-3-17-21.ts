
function partition<T>(items: T[], left: number, right: number) {
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
  return L;
}

function swap(array: any[], a: number, b: number) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

function quick<T>(items: T[], left: number, right: number) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) quick(items, left, index - 1)

    if (index < right) quick(items, index, right);

  }
  return items;
}

export function quickSort<T>(array: T[]) {
  return quick(array, 0, array.length - 1);
};
