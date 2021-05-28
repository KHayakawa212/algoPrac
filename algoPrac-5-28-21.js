// STRING MATCHING IN AN ARRAY

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Examples:

const words1 = ["mass", "as", "hero", "superhero"];
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:

const words2 = ["leetcode", "et", "code"];
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:

const words3 = ["blue", "green", "bu"];
// Output: []

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.

var strmatch = (wordarr) => {
  let resultArray = [];
  if (wordarr.length >= 100) {
    return wordarr;
  }
  if (wordarr.length >= 30) {
    return wordarr;
  }
  for (let i = 0; i < wordarr.length; i++) {
    for (let j = 0; j < wordarr.length; j++) {
      if (wordarr[i].length < wordarr[j].length) {
        if (wordarr[j].includes(wordarr[i])) {
          resultArray.push(wordarr[i]);
        }
      }
    }
  }
  return resultArray;
};
console.log(strmatch(words1));
console.log(strmatch(words2));
console.log(strmatch(words3));
