export const minBy = <T>(
  array: T[],
  callback: (element: T) => number
): T | undefined => {
  if (array.length === 0) return undefined;

  let minValueElement = array[0];
  let minValue = callback(array[0]);

  for (let element of array) {
    const value = callback(element);
    if (value < minValue) {
      minValue = value;
      minValueElement = element;
    }
  }

  return minValueElement;
};

export function maxBy<T>(
  array: T[],
  callback: (element: T) => number
): T | undefined {
  if (array.length === 0) return undefined;

  let maxValueElement = array[0];
  let maxValue = callback(array[0]);

  for (let element of array) {
    const value = callback(element);
    if (value > maxValue) {
      maxValue = value;
      maxValueElement = element;
    }
  }

  return maxValueElement;
}
