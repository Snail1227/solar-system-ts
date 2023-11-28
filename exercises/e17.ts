


export const minBy = <T>(
  array: T[],
  callback: (element: T) => number
): T | undefined => {
  if (array.length === 0) return;

  let currentMin: T = array[0]!;

  for (let element of array) {
    if (callback(element) < callback(currentMin)) currentMin = element;
   }
  return currentMin;
};

export function maxBy<T>(
  array: T[],
  callback: (element: T) => number
): T | undefined {
  if (array.length === 0) return;

  let currentMax: T = array[0]!;

  for (let element of array) {
    if (callback(element) > callback(currentMax)) currentMax = element;
  }

  return currentMax;
}
