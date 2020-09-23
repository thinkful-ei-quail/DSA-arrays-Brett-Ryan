/* eslint-disable no-console */
/* eslint-disable eqeqeq */
const Memory = require('./memory');
const memory = new Memory();

console.log(memory.allocate);

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
}
Array.SIZE_RATIO = 3;

// * 2. Explore the Push method:

// Create an instance of the Array class
const coolArray = new Array();

// Add an item to the array
coolArray.push(99);
coolArray.push(5);
coolArray.push(3);
coolArray.push(1);
coolArray.push(1);
coolArray.push(1);
coolArray.push(1);
coolArray.push(100);
coolArray.push(100);
coolArray.push(100);
coolArray.push(100);
coolArray.push(100);
coolArray.push(1000000);
coolArray.push(100);
coolArray.push(100);
coolArray.push(100);

console.log(coolArray); // Array { length: 4, _capacity: 12, ptr: 3 }

// * 3. Exploring the Pop method

coolArray.pop();
console.log(coolArray); // Array { length: 3, _capacity: 12, ptr: 3 }

// * 4. Understanding more about how arrays work:

// what is the purpose of the _resize() --> When the array hits the memory limits
// it gives more memory so the array can grow.

// Todo print the first item in the array coolArray
console.log(coolArray.get(0));

// Todo Empty the array and add just 1 item: coolArray.push("one-item")
console.log(coolArray.length);
// clears the array
coolArray.length = 0;
console.log(coolArray.length); // 0
coolArray.push(1000000);
console.log(coolArray.get(0));
console.log(coolArray);
coolArray.push('astring');
console.log(coolArray.get(1)); // NaN

const stringArray = new Array();
stringArray.push('s');
console.log(stringArray.get(0)); // ? NaN --> All strings seem to show up this way
console.log(stringArray);

// * URLify a string

function URLify(string) {
  return string.trim().replace(/\s/g, '%20');
}
console.log(URLify('www.string space space space .com'));

function URLtang(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newString = newString + '%20';
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
} // O(n) performance
console.log(URLtang('hello hello hello'));

// * 6. Filtering an array

// Have an array of numbers. Algorithm to remove all numbers less than 5
// cannot use .filter()

const sizzleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function removeLessThanFive(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
} // O(n) performance
// .sort() is O(log n)

console.log(removeLessThanFive(sizzleArray));

// * 7. Max sum in the array

function maxSum(arr) {
  const sortedArr = arr.sort();
  return sortedArr[sortedArr.length - 1] + sortedArr[sortedArr.length - 2];
} // O(1) performance

console.log(maxSum([5, 3, 7, 1, 3, 1, 9, 2])); // 16

// * 8. Merge arrays

function mergeArrays(a, b) {
  let i = 0;
  let j = 0;

  const newArray = [];
  for (let n = 0; n < a.length - 1 + (b.length - 1); n++) {
    if (a[i] == b[j]) {
      newArray.push(a[i]);
      newArray.push(b[j]);
      i++;
      j++;
    } else if (a[i] > b[j]) {
      newArray.push(b[j]);
      j++;
    } else {
      newArray.push(a[i]);
      i++;
    }
  }

  return newArray;
}

function mergedArrays() {
  const arrA = [1, 3, 6, 8, 11, 12, 13, 14];
  const arrB = [2, 3, 4, 5, 7, 9, 12, 20];

  let arrC = arrA.concat(arrB);

  arrC.filter((item, index) => {
    return arrC.indexOf(item) === index;
  });

  return arrC;
}

const arrA = [1, 3, 6, 8, 11, 12, 13, 14];
const arrB = [2, 3, 4, 5, 7, 9, 12, 20];

console.log('-------------------------');
console.log(mergeArrays(arrA, arrB));
// console.log(mergedArrays());

// * 10: Products
//Given an array of numbers, write an algorithm that
// outputs an array where each index is the product of all
// the numbers in the input array except for the number at each current index.
// See the following example input and output.

// Input:  [1, 2, 9, 4]
// Output: [108, 36, 12, 27]

const eyeArray = [1, 2, 9, 4];

function products() {}
