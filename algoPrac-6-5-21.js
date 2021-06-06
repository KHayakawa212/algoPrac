/* 
  Array: Concat
  .push allowed: arrName.push(newItem)
  Replicate JavaScript’s concat() which combines two arrays into one NEW array
  Input: two arrays
  Output: one NEW array with the items of both in the original order
*/

// const arrA1 = ["a", "b"];
// const arrB1 = [1, 2, 3];
// const expected1 = ["a", "b", 1, 2, 3];

// const arrA2 = [1, 2, 3];
// const arrB2 = ["a", "b"];
// const expected2 = [1, 2, 3, "a", "b"];

// const arrA3 = [1];
// const arrB3 = ["a", "b"];
// const expected3 = [1, "a", "b"];

/**
 * Concatenates the given arrays together into order that they are passed in.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @return {Array<any>} The new arr that is a concatenation of the given arrays.
 */
// function concat(items1, items2) {
//   var newArr = [];
//   for (let i = 0; i < items1.length; i++) {
//     newArr.push(items1[i]);
//   }
//   for (let j = 0; j < items2.length; j++) {
//     newArr.push(items2[j]);
//   }
//   return newArr;
// }

// // Tests
// const result1 = concat(arrA1, arrB1);
// console.log(result1, "should be", expected1);

// const result2 = concat(arrA2, arrB2);
// console.log(result2, "should be", expected2);

// const result3 = concat(arrA3, arrB3);
// console.log(result3, "should be", expected3);
/*
  From zoom interview with student in year 2020
  Given one array,
  return a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
const expected2 = ["a", "a"];

const arr3 = [];
const expected3 = [];

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @return {Array<any>} The resulting concatenation of the given arr with
 *    itself.
//  */
function concatArrWithSelf(items) {
  var newArr = [];

  for (let i = 0; i < items.length; i++) {
    newArr.push(items[i]);
  }
  for (let i = 0; i < items.length; i++) {
    newArr.push(items[i]);
  }

  return newArr;
}

// Tests;
const result1 = concatArrWithSelf(arr1);
console.log(result1, "should be", expected1);

const result2 = concatArrWithSelf(arr2);
console.log(result2, "should be", expected2);

const result3 = concatArrWithSelf(arr3);
console.log(result3, "should be", expected3);

/*
  Given an array of integers
  return the index where the smallest integer is located
  return -1 if there is no smallest integer (array is empty)
  since -1 is not a valid index, this indicates it couldn't be found
  If the smallest integer occurs more than once, return the index of the first one.
*/

// const nums1 = [5, 2, 3];
// const expected1 = 1;

// const nums2 = [5, 2, 2, 3];
// const expected2 = 1;

// const nums3 = [];
// const expected3 = -1;

// /**
//  * Returns the index of the smallest number from the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums
//  * @return {number} Index of smallest number or -1 if empty given array.
// //  */
// function indexOfMinVal(nums) {
//   var min = nums[0];
//   var index = 0;
//   if (nums.length < 1) {
//     return -1;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (min > nums[i]) {
//       min = nums[i];
//       index = i;
//     }
//   }
//   return index;
// }

// // Tests
// const result1 = indexOfMinVal(nums1);
// console.log(result1, "should be", expected1);

// const result2 = indexOfMinVal(nums2);
// console.log(result2, "should be", expected2);

// const result3 = indexOfMinVal(nums3);
// console.log(result3, "should be", expected3);
