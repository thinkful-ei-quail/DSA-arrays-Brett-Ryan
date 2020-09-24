function max(array) {
  for (const itemA of array) {
    // Assume that it is the maximum value until we know otherwise
    let isMax = true;

    for (const itemB of array) {
      if (itemA < itemB) {
        // There is a value greater than itemA
        // so it is not the maximum
        isMax = false;
      }
    }
    if (isMax) {
      return itemA;
    }
  }
}

console.log(max([1, 2, 3, 4, 5]));

// Because you compare every value with every other value
//it will have an O(n^2) worst and average-case time complexity.
//The best case is that the 1st value is the maximum, making it O(n).

// So, how could this be improved? Well, a simple improvement would be
// to stop checking the values when you know it is not the maximum value:

function betterMax(array) {
  for (const itemA of array) {
    // Assume that it is the maximum value until we know otherwise
    let isMax = true;

    for (const itemB of array) {
      if (itemA < itemB) {
        // There is a value greater than itemA
        // so it is not the maximum
        isMax = false;
        // Don't keep checking the value
        break;
      }
    }
    if (isMax) {
      return itemA;
    }
  }
}

console.log(betterMax([1, 2, 3, 4, 5, 6]));

// Still O(n^2) but slightly better

function superMax(array) {
  if (array.length === 0) {
    return null;
  }

  let currentMax = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if (item > currentMax) {
      currentMax = item;
    }
  }
  return currentMax;
}

console.log(superMax([1, 2, 3, 4, 5, 6, 7]));

//Because you only work through the array 1 time,
// this has an O(n) best, average and worst case.
