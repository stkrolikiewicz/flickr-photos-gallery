export function arrayRemove<T>(arr: Array<T>, value: T) {

  return arr.filter(function (ele) {
    return ele != value;
  });
}