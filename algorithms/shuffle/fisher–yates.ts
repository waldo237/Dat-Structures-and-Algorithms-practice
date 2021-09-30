import { swap } from '../../util';

export function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, i, randomIndex);
  }
  return array;
}

export function swap(array: any[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}
