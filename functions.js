function sumOfArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return arr.reduce((a, b) => a + b, 0);
}

function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str === str.split('').reverse().join('');
}

function findMax(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }
  return Math.max(...arr);
}

module.exports = {
  sumOfArray,
  reverseString,
  isPalindrome,
  findMax
};