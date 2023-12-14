/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  let left = 0;
  let right = lowerStr.length - 1;

  const isAlphanumeric = (char) => /[a-z0-9]/.test(char);
  while (left < right) {
    while (!isAlphanumeric(lowerStr[left]) && left < right) {
      left++;
    }

    while (!isAlphanumeric(lowerStr[right]) && left < right) {
      right--;
    }

    if (lowerStr[left] !== lowerStr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true; 
}

module.exports = isPalindrome;
