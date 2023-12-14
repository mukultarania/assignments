/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

const vow = ["a",  "e",  "i",  "o",  "u",  "A",  "E",  "I","O","U"]

function countVowels(str) {
  // Your code here
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (vow.includes(str[i])) {
      res++;
    }
  }
  return res;
}

module.exports = countVowels;