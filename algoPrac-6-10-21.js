/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 9, 10, 11, 12];
const searchNum3 = 12;
const expected3 = true;

// bonus, how many times does the search num appear?
// const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
// const searchNum4 = 2;
// const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
// [(5, 8, 10, 20, 33, 34, 44, 62, 78, 88, 90)];
//   0  1   2   3   4   5   6  7    8   9  10

function binarySearch(sortedNums, searchNum) {
  let leftIndex = 0;
  let rightIndex = sortedNums.length - 1;
  let middleIndex = Math.floor((rightIndex - leftIndex) / 2);

  while (leftIndex <= rightIndex) {
    // console.log(middleIndex);
    if (sortedNums[middleIndex] === searchNum) {
      return true;
    }

    if (searchNum < sortedNums[middleIndex]) {
      rightIndex = middleIndex - 1;
      middleIndex = Math.floor((rightIndex - leftIndex) / 2);
    } else {
      leftIndex = middleIndex + 1;
      middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    }
  }
  return false;
}

// // Tests
// const result1 = binarySearch(nums1, searchNum1);
// console.log(result1, "should be", expected1);

// const result2 = binarySearch(nums2, searchNum2);
// console.log(result2, "should be", expected2);

// const result3 = binarySearch(nums3, searchNum3);
// console.log(result3, "should be", expected3);

// const result4 = binarySearch(nums4, searchNum4);
// console.log(result4, "should be", expected4);

/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA5 = [1, 2, 3];
const arrB5 = ["a", "b", "c"];
const expected5 = [1, "a", 2, "b", 3, "c"];

const arrA6 = [1, 3];
const arrB6 = [2, 4, 6, 8];
const expected6 = [1, 2, 3, 4, 6, 8];

const arrA7 = [1, 3, 5, 7];
const arrB7 = [2, 4];
const expected7 = [1, 2, 3, 4, 5, 7];

const arrA8 = [];
const arrB8 = [42, 0, 6];
const expected8 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
  let resultArray = [];
  let smallArray = 0;
  let bigArray = 0;
  //returning a new array
  //loop both arrays completely
  if (arr1.length < arr2.length) {
    smallArray = arr1;
    bigArray = arr2;
  } else {
    smallArray = arr2;
    bigArray = arr1;
  }
  for (let i = 0; i < smallArray.length; i++) {
    resultArray.push(bigArray[i]);
    resultArray.push(smallArray[i]);
    //resultArray.push(bigArray[i], smallArray[i])
  }
  for (let j = smallArray.length; j < bigArray.length; j++) {
    resultArray.push(bigArray[j]);
  }
  return resultArray;
}

// Tests
const result5 = interleaveArrays(arrA5, arrB5);
console.log(result5, "should be", expected5);

const result6 = interleaveArrays(arrA6, arrB6);
console.log(result6, "should be", expected6);

const result7 = interleaveArrays(arrA7, arrB7);
console.log(result7, "should be", expected7);

const result8 = interleaveArrays(arrA8, arrB8);
console.log(result8, "should be", expected8);
