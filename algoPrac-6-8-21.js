//----------------------------------------- ALGO 1 -------------------------------------------------------------------

/* 
  Given an array and an item to search for,
  return the index where the item is found,
  return -1 to represent not found
  */

const arr1 = ["a", "b", "c"];
const searchItem1 = "c";
const expected1 = 2;

const arr2 = ["a", "b", "c"];
const searchItem2 = 5;
const expected2 = -1;

const arr3 = ["c", "a", "b", "c"];
const searchItem3 = "c";
const expected3 = 0;

const arr4 = [];
const searchItem4 = 5;
const expected4 = -1;

/**
 * Finds the index from the given array where the given item is found.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} searchItem The item to find.
 * @returns {number} The index of found item, or -1 if not found.
 */
function indexOf(items, searchItem) {
  //loop through array items
  //check if searchItem is equal to current item
  //if yes return current index
  //if no for all then return -1

  for (var i = 0; i < items.length; i++) {
    if (searchItem === items[i]) {
      return i;
    }
  }
  return -1;
}

// Tests
const result1 = indexOf(arr1, searchItem1);
console.log(result1, "should be", expected1);

const result2 = indexOf(arr2, searchItem2);
console.log(result2, "should be", expected2);

const result3 = indexOf(arr3, searchItem3);
console.log(result3, "should be", expected3);

const result4 = indexOf(arr4, searchItem4);
console.log(result4, "should be", expected4);

//----------------------------------------- ALGO 2 -------------------------------------------------------------------
/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr5 = [1, 2, 3];
const separator5 = ", ";
const expected5 = "1, 2, 3";

const arr6 = [1, 2, 3];
const separator6 = "-";
const expected6 = "1-2-3";

const arr7 = [1, 2, 3];
const separator7 = " - ";
const expected7 = "1 - 2 - 3";

const arr8 = [1];
const separator8 = ", ";
const expected8 = "1";

const arr9 = [];
const separator9 = ", ";
const expected9 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */

function join(arr, separator = ", ") {
  //result string
  let resultString = "";
  if (arr.length === 0) {
    return resultString;
  }
  //loop array
  //for each item we want to add the separator except for the last item
  for (var i = 0; i < arr.length - 1; i++) {
    //starting with result string want to add current item in array, then add separator
    resultString += arr[i] + separator;
  }
  // add the last item end
  // arr = [1, 2, 3, 4] separator = ", "
  // resultString = "1, 2, 3, "
  return (resultString += arr[arr.length - 1]);
}

// Tests
const result5 = join(arr5, separator5);
console.log(result5, "should be", expected5);

const result6 = join(arr6, separator6);
console.log(result6, "should be", expected6);

const result7 = join(arr7, separator7);
console.log(result7, "should be", expected7);

const result8 = join(arr8, separator8);
console.log(result8, "should be", expected8);

const result9 = join(arr9, separator9);
console.log(result9, "should be", expected9);

const result22 = join([1, 2, 3, 4]);
console.log(result22, "should be", "1, 2, 3, 4");

//----------------------------------------- ALGO 3 -------------------------------------------------------------------
/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr10 = ["a", "a", "a"];
const expected10 = {
  a: 3,
};

const arr11 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected11 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr12 = [];
const expected12 = {};
/**\
 * Dictionaries/Objects are also called freq tables and hash tables
 * for a dictionary {} named dict with key and value pairs:
 * dict{
 * "key1" : "value1"
 * }
 *  create a new key value pair by writing dict[newkey] = newValue
 *  access value1 by writing value1 = dict[key1] where key is the corresponding key to the value
 * find a key by writing dict.hasOwnProperty(nameOfKey)
 */
/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amount of times that item occurs.
 */
function frequencyTableBuilder(arr) {
  //need an empty dictionary to start
  dict = {};
  //loop through array
  for (var i = 0; i < arr.length; i++) {
    //if dictionary does not have a key equal to arr[i]
    if (!dict.hasOwnProperty(arr[i])) {
      //creating a key equal to arr[i] and setting the value = 1
      dict[arr[i]] = 1;
    } else {
      //in dictionary called dict at key name arr[i] increment the VALUE by 1
      dict[arr[i]]++;
    }
  }
  //return dictionary
  return dict;
}
// Tests
const result10 = frequencyTableBuilder(arr10);
console.log(result10, "should be", expected10);

const result11 = frequencyTableBuilder(arr11);
console.log(result11, "should be", expected11);

const result12 = frequencyTableBuilder(arr12);
console.log(result12, "should be", expected12);
