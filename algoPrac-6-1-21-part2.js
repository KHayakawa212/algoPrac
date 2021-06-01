/* 

  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
    - return empty array

*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];
//           { 5:1, 1:1, 4:1 }

const nums4 = [5, 1, 4, 1];
const expected4 = [1];
//           { 5:1, 1:2, 4:1 }

//            Obj1
//            { key1: val1, key2: val2, key3: val3}
//            Obj1[key1] =

//            array1
//            [ val4, val5, val6 ]
//index            0    1     2
//        array1[0] =

//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

//           { 5:2, 1:2, 4:1 }

function mode(nums) {
  let arr = [];
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count.hasOwnProperty(nums[i])) {
      count[nums[i]]++;
    } else {
      count[nums[i]] = 1;
    }
  }
  let max = 0;
  for (let key in count) {
    if (count[key] == max) {
      arr.push(key);
    } else if (count[key] > max) {
      max = count[key];
      arr = [key];
    }
  }
  if (Object.keys(count).length == arr.length && arr.length > 1) {
    return [];
  }

  return arr;
}

// console.log(mode(nums1));
// console.log(mode(nums2));
// console.log(mode(nums3));
// console.log(mode(nums4));
// console.log(mode(nums5));

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

persistence(39) === 3; // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

persistence(999) === 4; // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0; // because 4 is already a one-digit number

function persistence(num, count = 0) {
  if (num.toString().length == 1) {
    return count;
  } else {
    let newNum = 1;
    for (let i = 0; i < num.toString().length; i++) {
      newNum *= parseInt(num.toString()[i]);
    }
    return persistence(newNum, count + 1);
  }
}
