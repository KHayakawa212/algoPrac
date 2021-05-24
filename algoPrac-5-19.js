/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const people1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];
const searchFor1 = "jo";
const searchBy1 = "firstName";
const expected1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
];

/**
 * Filters the given items based on the search criteria using a startsWith
 * search method.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchBy The key to search by.
 * @param {string} searchFor The value of the given key to search for.
 * @returns {Array<Objects>} The matched items.
 */

//string methods: includes, startsWith, endsWith
function filterByKey(items, searchFor, searchBy, searchMethod) {
  let resultArray = [];
  for (var obj of items) {
    if (searchMethod == "startsWith") {
      if (obj[searchBy].toLowerCase().startsWith(searchFor.toLowerCase())) {
        resultArray.push(obj);
      }
    } else if (searchMethod == "endsWith") {
      if (obj[searchBy].toLowerCase().endsWith(searchFor.toLowerCase())) {
        resultArray.push(obj);
      }
    } else {
      if (obj[searchBy].toLowerCase().includes(searchFor.toLowerCase())) {
        resultArray.push(obj);
      }
    }
  }
  return resultArray;
}

function filterByKey2(items, searchFor, searchBy, searchMethod) {
  let resultArray = [];
  for (var obj of items) {
    switch (searchMethod) {
      case "startsWith":
        if (obj[searchBy].toLowerCase().startsWith(searchFor.toLowerCase())) {
          resultArray.push(obj);
        }
        break;
      case "endsWith":
        if (obj[searchBy].toLowerCase().endsWith(searchFor.toLowerCase())) {
          resultArray.push(obj);
        }
        break;
      case "includes":
        if (obj[searchBy].toLowerCase().includes(searchFor.toLowerCase())) {
          resultArray.push(obj);
        }
        break;
    }
  }
  return resultArray;
}

function filterByKey3(items, searchFor, searchBy, searchMethod) {
  let resultArray = [];
  for (var obj of items) {
    if (obj[searchBy].toLowerCase()[searchMethod](searchFor.toLowerCase())) {
      resultArray.push(obj);
    }
  }
  return resultArray;
}

// console.log(filterByKey(people1, searchFor1, searchBy1, "startsWith"));
// console.log(filterByKey(people1, searchFor2, searchBy2, "startsWith"));
// console.log(filterByKey(people1, searchFor3, searchBy3, "startsWith"));
// console.log(filterByKey(people1, searchFor4, searchBy4, searchMethod4));

// console.log(filterByKey2(people1, searchFor1, searchBy1, "startsWith"));
// console.log(filterByKey2(people1, searchFor2, searchBy2, "startsWith"));
// console.log(filterByKey2(people1, searchFor3, searchBy3, "startsWith"));
// console.log(filterByKey2(people1, searchFor4, searchBy4, searchMethod4));

console.log(filterByKey3(people1, searchFor1, searchBy1, "startsWith"));
console.log(filterByKey3(people1, searchFor2, searchBy2, "startsWith"));
console.log(filterByKey3(people1, searchFor3, searchBy3, "startsWith"));
console.log(filterByKey3(people1, searchFor4, searchBy4, searchMethod4));

/* 
    Given an array of person objects with the following keys:
      firstName[string]
      lastName[string]
      friends[arr of friend objects]
      isSocialDistancing[bool]
      Friend object keys:
        firstName[string]
        lastName[string]
        isSocialDistancing[bool]
        hasCovid[bool]
      return a new array of the names of people (not friends) who are at high risk of infection
      A person is at high risk of catching the virus if they meet all the below criteria:
      1. not practicing social distancing
      2. have a friend who is not practicing social distancing whom hasCovid
      Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
  */

const friend1 = {
  firstName: "Friend",
  lastName: "One",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend2 = {
  firstName: "Friend",
  lastName: "Two",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend3 = {
  firstName: "Friend",
  lastName: "Three",
  isSocialDistancing: false,
  hasCovid: false,
};

const people = [
  {
    firstName: "Person",
    lastName: "One",
    isSocialDistancing: false,
    friends: [friend2, friend3],
  },
  {
    firstName: "Person",
    lastName: "Two",
    isSocialDistancing: true,
    friends: [friend2, friend1],
  },
  {
    firstName: "Person",
    lastName: "Three",
    isSocialDistancing: false,
    friends: [friend2, friend1],
  },
];

const expected = ["Person One", "Person Three"];

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {Array<Friend>} friends
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) {
  let resultArray = [];
  for (let obj of persons) {
    let tempString = "";
    if (!obj.isSocialDistancing) {
      for (let friend of obj.friends) {
        if (friend.hasCovid && !friend.isSocialDistancing) {
          tempString = obj.firstName + " " + obj.lastName;
          resultArray.push(tempString);
          break;
        }
      }
    }
  }
  return resultArray;
}

// console.log(coronaVirusAtRisk(people));

/**
 * - Time O(?).
 * - Space O(?).
 */
function coronaVirusAtRiskFunctional(persons) {}