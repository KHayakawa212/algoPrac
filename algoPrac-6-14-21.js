/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @return {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {
  let resultObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (resultObj.hasOwnProperty(arr[i])) {
      resultObj[arr[i]] += 1;
    } else {
      resultObj[arr[i]] = 1;
    }
  }
  return resultObj;
}

// function frequencyTableBuilder(arr) {
//   var resultObj = {};

//   for (i = 0; i < arr.length; i++) {
//     if (resultObj[arr[i]]) {
//       resultObj[arr[i]] += 1;
//     } else {
//       resultObj[arr[i]] = 1;
//     }
//   }
//   return resultObj;
// }

console.log(frequencyTableBuilder(arr1));
console.log(frequencyTableBuilder(arr2));
console.log(frequencyTableBuilder(arr3));

// module.exports = { frequencyTableBuilder };

/*****************************************************************************/

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected4 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @return {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
  var newArray = wordsStr.split(" ");
  var resultStr = "";
  for (i = newArray.length - 1; i >= 0; i--) {
    resultStr += newArray[i];
    resultStr += " ";
  }
  resultStr.length -= 1;
  return resultStr;
}

console.log(reverseWordOrder(str1));
module.exports = { reverseWordOrder };
