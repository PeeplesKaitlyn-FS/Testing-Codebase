const functions = require('./functions');
const tests = require('./tests.test');

// Examples of the functions being used
console.log(functions.sumOfArray([1, 2, 3, 4, 5])); // Output: 15
console.log(functions.reverseString('hello')); // Output: 'olleh'
console.log(functions.isPalindrome('madam')); // Output: true
console.log(functions.findMax([10, 20, 30, 40, 50])); // Output: 50

// Run tests
tests.runTests();