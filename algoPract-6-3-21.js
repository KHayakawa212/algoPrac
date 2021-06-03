/* 
  Given array and an additional value, insert this value at the beginning of the array by making space for it at the beginning of the array.
  return the new length of the array.

  Do this without using any built-in array methods.
*/

const arr1 = [1, 2, 3];
const newItem1 = 0;
const expected1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2 = [];
const newItem2 = "a";
const expected2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ["a"];

const arr3 = [1, 2, 3, 3, "a", 7];
const newItem3 = 5;
const expected3 = 7;
// after function is called, arr1 should be:
const arr3Expected = [5, 1, 2, 3, 3, "a", 7];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @return {number} The new length of items.
 */

function unshift(items, newItem) {
  for (let i = items.length; i > 0; i--) {
    items[i] = items[i - 1];
  }
  items[0] = newItem;
  return items.length;
}

// Tests
const result1 = unshift(arr1, newItem1);
console.log(result1, "should be", expected1);
console.log(arr1, "should be", arr1Expected);

const result2 = unshift(arr2, newItem2);
console.log(result2, "should be", expected2);
console.log(arr2, "should be", arr2Expected);

const result3 = unshift(arr3, newItem3);
console.log(result3, "should be", expected3);
console.log(arr3, "should be", arr3Expected);

/**

  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.
  Do this without using any built-in array methods except pop().


const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const arr1Expected = [2, 3];

const arr2 = ["a", "b", "c", "d"];
const expected2 = "a";
// after running function arr2 should now be:
const arr2Expected = ["b", "c", "d"];

 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @return {any} The removed value previously at idx 0.
function shift(items) {
  var temp = items[0];
  for (let i = 0; i < items.length - 1; i++) {
    items[i] = items[i + 1];
  }
  items.pop();
  return temp;
}

// Tests
const result1 = shift(arr1);
console.log(result1, "should be", expected1);
console.log(arr1, "should be", arr1Expected);

const result2 = shift(arr2);
console.log(result2, "should be", expected2);
console.log(arr2, "should be", arr2Expected);
 */
