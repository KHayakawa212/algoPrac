// "Possible Palindrome"

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "baba" => true
// "baab"

// "bcda" => false
// "abcd"

/*
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "aabbccdde";
const expected1 = true;

const str2 = "baba";
const expected2 = true;

const str3 = "bcda";
const expected3 = false;

const str4 = "";
const expected4 = false;

const str5 = "a";
const expected5 = true;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */

function canStringBecomePalindrome(str) {
  let isPivot = false;
  //create a frequency table
  let freqTable = {};

  if (str.length == 0) {
    return false;
  }
  if (str.length == 1) {
    return true;
  }

  for (let i = 0; i < str.length; i++) {
    if (!freqTable.hasOwnProperty(str[i])) {
      freqTable[str[i]] = 1;
    } else {
      freqTable[str[i]] += 1;
    }
  }

  let freqVals = Object.values(freqTable);
  //if even number of letters
  if (str.length % 2 == 0) {
    for (let j = 0; j < freqVals.length; j++) {
      if (freqVals[j] % 2 != 0) {
        return false;
      }
    }
    return true;
  }
  //if odd number of letters
  if (str.length % 2 != 0) {
    for (let j = 0; j < freqVals.length; j++) {
      if (freqVals[j] % 2 != 0) {
        if (isPivot == false) {
          isPivot = true;
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str2));

function canStringBecomePalindrome1(str) {
  let isPivot = false;
  //create a frequency table
  let freqTable = {};
  //if even number of letters
  if (str.length % 2 == 0) {
    for (let i = 0; i < str.length; i++) {
      if (!freqTable.hasOwnProperty(str[i])) {
        freqTable[str[i]] = 1;
      } else {
        freqTable[str[i]] += 1;
      }
    }
    for (const key in freqTable) {
      let freqVals = freqTable[key];
      if (freqVals % 2 != 0) {
        return false;
      }
    }
    return true;
  }
  //if odd number of letters
  if (str.length % 2 != 0) {
    for (let i = 0; i < str.length; i++) {
      if (!freqTable.hasOwnProperty(str[i])) {
        freqTable[str[i]] = 1;
      } else {
        freqTable[str[i]] += 1;
      }
    }
    let freqVals = Object.values(freqTable);
    for (let j = 0; j < freqVals.length; j++) {
      if (freqVals[j] % 2 != 0) {
        if (isPivot == false) {
          isPivot = true;
        } else {
          return false;
        }
      }
    }
    return true;
  }
}

console.log(canStringBecomePalindrome1(str1));
console.log(canStringBecomePalindrome1(str2));
console.log(canStringBecomePalindrome1(str3));
console.log(canStringBecomePalindrome1(str3));
console.log(canStringBecomePalindrome1(str2));

function canStringBecomePalindrome2(str) {
  var string = str.toLowerCase();
  isEven = false;
  if (str.length == 0) {
    return false;
  }
  if (string.length % 2 == 0) {
    isEven = true;
  }
  var freq = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string.charAt(i);
    if (freq[letter]) {
      freq[letter]++;
    } else {
      freq[letter] = 1;
    }
  }
  var values = Object.values(freq);
  var oddCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (values[i] % 1 == 0 && values[i] % 2 !== 0) {
      oddCount += 1;
    }
  }

  if (isEven == true && oddCount == 0) {
    return true;
  } else if (isEven == true && oddCount !== 0) {
    return false;
  } else if (isEven == false && oddCount == 1) {
    return true;
  } else if (isEven == false && oddCount == 0) {
    return false;
  } else if (isEven == false && oddCount > 1) {
    return false;
  }
}

console.log(canStringBecomePalindrome2(str1));
console.log(canStringBecomePalindrome2(str2));
console.log(canStringBecomePalindrome2(str3));
console.log(canStringBecomePalindrome2(str3));
console.log(canStringBecomePalindrome2(str2));
