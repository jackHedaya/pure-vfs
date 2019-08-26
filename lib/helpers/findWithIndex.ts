export default function findWithIndex<T>(
  arr: Array<T>,
  predicate: (value: T, index: number) => unknown
): { index: number; item: T | null } {
  
  for (var i = 0; i < arr.length; i++) {
    const elem = arr[i]
    if (predicate(elem, i)) {
      return { index: i, item: elem }
    }
  }

  return { index: -1, item: null }
}
