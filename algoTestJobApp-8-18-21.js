const sentence1 =
  "asdf asdf fe sd   !dlfkje KKsdjf! s()df asdf! asdf? a123 45 asdf.";
const sentence2 = "efs kdfj ijeije 123 123 123";
const sentence3 = "asdf. fghj. oij! alsdkjf? ijef. 123.";
const sentence4 = "aaaaa";
const sentence5 = "     laskdfj. lskdjf. 123. ljk1. osijdf. lask-asdkfj?";

function wordCount(sentence) {
  let resultCount = 0;
  let wordArray = sentence.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    let numValidChars = 0;

    for (let j = 0; j < wordArray[i].length - 1; j++) {
      let k = wordArray[i].charAt(j);

      if ((k >= "a" && k <= "z") || (k >= "A" && k <= "Z") || k === "-") {
        numValidChars++;
      }
    }
    if (numValidChars === wordArray[i].length - 1) {
      let l = wordArray[i].charAt(wordArray[i].length - 1);
      if (
        (l >= "a" && l <= "z") ||
        (l >= "A" && l <= "Z") ||
        l === "." ||
        l === "!" ||
        l === "?"
      ) {
        resultCount++;
      }
    }
  }
  return resultCount;
}

console.log(wordCount(sentence1));
console.log(wordCount(sentence2));
console.log(wordCount(sentence3));
console.log(wordCount(sentence4));
console.log(wordCount(sentence5));
