// Find the intersection of two sorted arrays

function intersection(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        result.push(a[i]);
      }
    }
  }
  const resultAsSet = [...new Set(result)];
  return resultAsSet;
} // O(n^2)

// This would work for randomly sorted arrays

console.log(intersection([1, 2, 3, 6], [1, 2, 4, 7])); // [1, 3]
// case where there are no intersections:
console.log(intersection([1, 2, 3, 6], [5, 9, 12, 15])); // []

console.log(intersection([1, 2, 3, 6], [1, 2, 3, 6])); // [1, 2, 3, 6]

console.log(intersection([1, 1, 1, 1], [1, 2, 3, 6])); // [1]
console.log(intersection([1, 1, 2, 2], [-1, 1, 1, 2, 2, 6])); // [1, 1, 2, 2, or [1, 2]]

console.log(intersection([], [1, 2, 3, 6])); // []
console.log(intersection([1, 2, 3, 6], [])); // []
