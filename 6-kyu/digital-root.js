// link: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

function digital_root(n) {
    let digits = [...n + ''].map(Number);
    let finalNumber = digits.reduce(function(accumulator, currentValue) {  
      return accumulator + currentValue;
      }, 0);
    return finalNumber >= 10 ? digital_root(finalNumber) : finalNumber; 
  }