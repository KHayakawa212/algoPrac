// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// The maximum number of consecutive characters in a row is 9

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.

const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function stringEncode(str) {
  //check for edge cases of empty string or single letter
  if (str.length < 2) {
    return str;
  }
  let tempArray = [];
  let resultString = "";
  //initialize counter and currentLetter to 0 and the first letter of str respectively
  let counter = 0;
  let currentLetter = str[0];
  //loop through string
  for (let i = 0; i < str.length; i++) {
    //when current letter changes add the previous letter then the counter to tempArray
    if (str[i] !== currentLetter) {
      tempArray.push(str[i - 1]);
      tempArray.push(counter);
      currentLetter = str[i];
      counter = 1;
    } else {
      //if letter is the same as previous then just increment counter
      counter++;
    }
    //at the end of string add the final letter and count
    if (i == str.length - 1) {
      tempArray.push(str[i]);
      tempArray.push(counter);
    }
  }
  // turn array into a string
  resultString = tempArray.join("");
  //if result is greater than or equal original return original, else return resultString
  if (str.length <= resultString.length) {
    return str;
  } else {
    return resultString;
  }
}

// console.log(stringEncode(str1));
// console.log(stringEncode(str2));
// console.log(stringEncode(str3));
// console.log(stringEncode(str4));

// String Decode
// Turn an encoded string into a decoded string.

// special bonus: how would you solve this to account for numbers larger than 9?

// a = parseInt("10")
// a = 10

const str1a = "a3b2c1d3";
const expected1a = "aaabbcddd";

const str2b = "a3b2c11d13";
const expected2b = "aaabbcccccccccccddddddddddddd";

// NICE DAVID HANG
const numDictionary = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  0: true,
};

function stringDecode(str) {
  //are we guaranteed that it will be at least one letter and one number?
  let resultString = "";
  let loopCount = 0;
  let currentLetter = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      currentLetter = str[i];
    } else {
      loopCount = parseInt(str[i]);
      for (let j = 0; j < loopCount; j++) {
        resultString += currentLetter;
      }
    }
  }
  return resultString;
}

function stringDecode2(str) {
  let resultString = "";
  let currentLetter = "";
  for (let i = 0; i < str.length; i++) {
    let loopCount = 0;
    let stringToBeNumber = "";
    if (!numDictionary.hasOwnProperty(str[i])) {
      currentLetter = str[i];
    } else {
      while (numDictionary.hasOwnProperty(str[i])) {
        stringToBeNumber += str[i];
        i++;
      }
      i--;
      loopCount = parseInt(stringToBeNumber);
      for (let j = 0; j < loopCount; j++) {
        resultString += currentLetter;
      }
    }
  }
  return resultString;
}

console.log(stringDecode(str1a));
console.log(stringDecode2(str1a));
console.log(stringDecode2(str2b));
