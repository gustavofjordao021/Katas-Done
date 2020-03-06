// link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(numbers) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++) {
      for(let j = 0; j < numbers.length; j++) {
        if (numbers[i] == numbers[j]) {
          count++;
        }
      }
      if (count % 2 != 0 ) {
        return numbers[i];
      }
    }
  };