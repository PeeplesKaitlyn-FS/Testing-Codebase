const { sumOfArray, reverseString, isPalindrome, findMax } = require('./functions.js');

test(`Test for function: reverseString(str) with non-string input`, () => {
  expect(() => reverseString(123)).toThrowError();
});

test(`Test for function: sumOfArray(arr) with positive numbers`, () => {
  const result = sumOfArray([1, 2, 3, 4, 5]); // should be 15
  expect(result).toBe(15);
});

test(`Test for function: sumOfArray(arr) with negative numbers`, () => {
  const result = sumOfArray([-1, -2, -3, -4, -5]); // should be -15
  expect(result).toBe(-15);
});

test(`Test for function: sumOfArray(arr) with decimal numbers`, () => {
  const result = sumOfArray([1.5, 2.5, 3.5, 4.5, 5.5]); // should be 17.5
  expect(result).toBe(17.5);
});

test(`Test for function: sumOfArray(arr) with empty array`, () => {
  const result = sumOfArray([]); // should be 0
  expect(result).toBe(0);
});

test(`Test for function: sumOfArray(arr) with single element array`, () => {
  const result = sumOfArray([5]); // should be 5
  expect(result).toBe(5);
});

test(`Test for function: reverseString(str) with normal string`, () => {
  const result = reverseString('hello'); // should be 'olleh'
  expect(result).toBe('olleh');
});

test(`Test for function: reverseString(str) with single character`, () => {
  const result = reverseString('a'); // should be 'a'
  expect(result).toBe('a');
});

test(`Test for function: reverseString(str) with empty string`, () => {
  const result = reverseString(''); // should be ''
  expect(result).toBe('');
});

test(`Test for function: reverseString(str) with non-string input`, () => {
  expect(() => reverseString(123)).toThrowError(); // should throw an error
});

test(`Test for function: isPalindrome(str) with palindrome string`, () => {
  const result = isPalindrome('madam'); // should be true
  expect(result).toBe(true);
});

test(`Test for function: isPalindrome(str) with non-palindrome string`, () => {
  const result = isPalindrome('hello'); // should be false
  expect(result).toBe(false);
});

test(`Test for function: isPalindrome(str) with single character`, () => {
  const result = isPalindrome('a'); // should be true
  expect(result).toBe(true);
});

test(`Test for function: isPalindrome(str) with empty string`, () => {
  const result = isPalindrome(''); // should be true
  expect(result).toBe(true);
});

test(`Test for function: findMax(arr) with positive numbers`, () => {
  const result = findMax([1, 2, 3, 4, 5]); // should be 5
  expect(result).toBe(5);
});

test(`Test for function: findMax(arr) with negative numbers`, () => {
  const result = findMax([-1, -2, -3, -4, -5]); // should be -1
  expect(result).toBe(-1);
});

test(`Test for function: findMax(arr) with decimal numbers`, () => {
  const result = findMax([1.5, 2.5, 3.5, 4.5, 5.5]); // should be 5.5
  expect(result).toBe(5.5);
});

test(`Test for function: findMax(arr) with empty array`, () => {
  expect(() => findMax([])).toThrowError(); // should throw an error
});

test(`Test for function: findMax(arr) with single element array`, () => {
  const result = findMax([5]); // should be 5
  expect(result).toBe(5);
});

test(`Test for function: findMax(arr) with non-array input`, () => {
  expect(() => findMax(123)).toThrowError(); // should throw an error
});