// Find the intersection of two sorted arrays

function intersection(a, b) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < a.length && j < b.length) {
    const valueA = a[i];
    const valueB = b[j];
    if (valueA === valueB) {
      result.push(valueA);
      i++;
      j++;
    } else if (valueA < valueB) {
      i++;
    } else {
      j++;
    }
  }
  return result;
} // O(n) performance

// This only works if the arrays are sorted

console.log(intersection([1, 2, 3, 6], [1, 2, 4, 7])); // [1, 3]
// case where there are no intersections:
console.log(intersection([1, 2, 3, 6], [5, 9, 12, 15])); // []

console.log(intersection([1, 2, 3, 6], [1, 2, 3, 6])); // [1, 2, 3, 6]

console.log(intersection([1, 1, 1, 1], [1, 2, 3, 6])); // [1]
console.log(intersection([1, 1, 2, 2], [-1, 1, 1, 2, 2, 6])); // [1, 1, 2, 2, or [1, 2]]

console.log(intersection([], [1, 2, 3, 6])); // []
console.log(intersection([1, 2, 3, 6], [])); // []
