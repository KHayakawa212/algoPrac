// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// getSum(1,15)
// 1 + 2 + 3 + 4 + ... + 13 + 14 + 15 = 120

// getSum (20,-4)
// -4 + -3 + -2 + -1 + 0 + 1 + 2 + 3 + 4 + 5 ... + 19 + 20 = 200
const a1 = 1;
const b1 = 2;

const a2 = 1;
const b2 = 15;

const a3 = 20;
const b3 = -4;

const a4 = 3;
const b4 = 6;

function getSum(a, b) {
  let sum = 0;
  //if a == b return a or b
  if (a === b) {
    return a;
  }
  //check if a < b if yes for loop from a to b
  //if not for loop from b to a
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  }
  //for loops adding each element to a running sum
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
    return sum;
  }
  //return final sum
}

console.log(getSum(a1, b1));
console.log(getSum(a2, b2));
console.log(getSum(a3, b3));
console.log(getSum(a4, b4));

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:
// Testing: [0, 0, 0, 1] ==> 1
//           8  4  2  1
// Testing: [0, 0, 1, 0] ==> 2
//           8  4  2  1
// Testing: [0, 1, 0, 1] ==> 5
//           8  4  2  1
// Testing: [1, 0, 0, 1] ==> 9
//           8  4  2  1
// Testing: [0, 0, 1, 0] ==> 2
//           8  4  2  1
// Testing: [0, 1, 1, 0] ==> 6
//           8  4  2  1
// Testing: [1, 1, 1, 1] ==> 15
//           8  4  2  1
// Testing: [1, 0, 1, 1] ==> 11
//           8  4  2  1

const arr1 = [0, 0, 0, 1];
const arr2 = [0, 0, 1, 0];
const arr3 = [0, 1, 0, 1];
const arr4 = [1, 0, 0, 1];
const arr5 = [1, 1, 0, 1];
const arr6 = [1, 1, 1, 0, 0, 0, 1];

const binaryArrayToNumber = (arr) => {
  let sum = 0;
  let adder = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 1) {
      sum += adder;
    }
    adder *= 2;
  }
  return sum;
};

console.log(binaryArrayToNumber(arr1));
console.log(binaryArrayToNumber(arr2));
console.log(binaryArrayToNumber(arr3));
console.log(binaryArrayToNumber(arr4));
console.log(binaryArrayToNumber(arr5));
console.log(binaryArrayToNumber(arr6));
