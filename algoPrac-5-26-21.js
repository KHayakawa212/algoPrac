/*
  ADD HONORIFIC

  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format

  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: avoid built in methods like split, slice, and substring
*/

// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

const addHonor = (honorific, fullNames) => {
  //loop through list of names
  //loop through the individual strings
  let resultArray = [];
  let tempIndex = 0;
  for (let name of fullNames) {
    let tempFirstName = "";
    let tempLastName = "";
    let addedHonor = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] != ",") {
        tempLastName += name[i];
      } else {
        tempIndex = i + 2;
        break;
      }
    }
    for (let j = tempIndex; j < name.length; j++) {
      tempFirstName += name[j];
    }
    addedHonor = honorific + " " + tempFirstName + " " + tempLastName;
    resultArray.push(addedHonor);
  }
  return resultArray;
};

console.log(addHonor(honorific1, names1));
console.log(addHonor(honorific2, names2));
console.log(addHonor(honorific3, names3));

// ANOTHER SOLUTION

// const addHonor2 = (honorific, fullNames) => {
//   let newListOfNames = [];

//   for (let name of fullNames) {
//     let firstName = (lastName = "");
//     let i = 0;
//     while (name[i] != ",") {
//       lastName += name[i];
//       i++;
//     }
//     i++;
//     while (i < name.length) {
//       firstName += name[i];
//       i++;
//     }
//     name = honorific + firstName + " " + lastName;
//     newListOfNames.push(name);
//   }

//   return newListOfNames;
// };

// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

const str1 = "abc";
// => 3

const str2 = "bbb";
// => 1

const str3 = "cabc";
// => 3

const str4 = "aabbc";
// => 2

const str5 = "dvadf";
// => 4

const lengthOfLongestSubstr = (s) => {
  let max = 0;
  let freqTable = {};
  let counter = 0;
  for (let j = 0; j < s.length; j++) {
    if (counter > max) {
      max = counter;
    }
    freqTable = {};
    counter = 0;
    for (let i = j; i < s.length; i++) {
      if (!freqTable.hasOwnProperty(s[i])) {
        freqTable[s[i]] = 1;
        counter++;
        // console.log("counter:" + counter + ", i:" + i + ", j:" + j);
      } else {
        break;
      }
    }
  }
  return max;
};

console.log(lengthOfLongestSubstr(str1));
console.log(lengthOfLongestSubstr(str2));
console.log(lengthOfLongestSubstr(str3));
console.log(lengthOfLongestSubstr(str4));
console.log(lengthOfLongestSubstr(str5));
