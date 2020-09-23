/* eslint-disable no-console */
/* eslint-disable eqeqeq */
// We can use the fact the arrays are sorted to traverse both of
// them in an in-order manner at the same time.
// The general idea of the algorithm is to use two indices,
// i and j, for arr1 and arr2, respectively. Every time one of indices,
// let's say i without any loss of generality,
// points to a value that is smaller than the value pointed by other index,
// we increment i. If arr1[i] == arr2[j], we add the value to the output array and
// increment both indices.

function findDuplicates(arr1, arr2) {
  let duplicates = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      duplicates.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return duplicates;
}
// Time complexity: O(n * m)
const arr1 = [1, 3, 6, 8, 11, 12, 13, 14];
const arr2 = [2, 3, 4, 5, 7, 9, 12, 20];
console.log(findDuplicates(arr1, arr2), 'case M ~ N');
