# Testing-Codebase
Author: Kaitlyn Peeples

This is a collection of JavaScript functions for performing various tasks, including summing arrays, reversing strings, checking palindromes, and finding maximum values.

## Functions

sumOfArray(arr): Returns the sum of all elements in the input array.

reverseString(str): Returns the input string reversed.

isPalindrome(str): Returns true if the input string is a palindrome, false otherwise.

findMax(arr): Returns the maximum value in the input array.

## Requirements

Node.js (tested with version 14.x)

### Installation

Clone this repository to your local machine.

Run npm install to install dependencies.

### Usage

Import the desired function(s) into your JavaScript file using require.

Call the function with the desired input.

### Example Usage

javascript

CopyInsert

const { sumOfArray, reverseString, isPalindrome, findMax } = require('./functions');

console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15

console.log(reverseString('hello')); // Output: 'olleh'

console.log(isPalindrome('madam')); // Output: true

console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

### Testing

Run npm test to execute the test suite.
