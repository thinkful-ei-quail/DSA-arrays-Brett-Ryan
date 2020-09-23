// Find the intersection of two sorted arrays

function intersection(a, b) {
  const result = [];
  const mergedArray = [...new Set(a), ...new Set(b)];
  mergedArray.sort();
  for (let i = 0; i < mergedArray.length - 1; i++) {
    if (mergedArray[i] === mergedArray[i + 1]) {
      result.push(mergedArray[i]);
    }
  }
  return result;
}

// This would work for randomly sorted arrays

console.log(intersection([1, 2, 3, 6], [1, 2, 4, 7])); // [1, 3]
// case where there are no intersections:
console.log(intersection([1, 2, 3, 6], [5, 9, 12, 15])); // []

console.log(intersection([1, 2, 3, 6], [1, 2, 3, 6])); // [1, 2, 3, 6]

console.log(intersection([1, 1, 1, 1], [1, 2, 3, 6])); // [1]
console.log(intersection([1, 1, 2, 2], [-1, 1, 1, 2, 2, 6])); // [1, 1, 2, 2, or [1, 2]]

console.log(intersection([], [1, 2, 3, 6])); // []
console.log(intersection([1, 2, 3, 6], [])); // []
