// link: https://www.codewars.com/kata/558fc85d8fd1938afb000014
/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.*/

function sumTwoSmallestNumbers(numbers) {  
    let ordered = numbers.sort(function(a,b){return a-b;});
     let result = 0;
     for(i = 0; i < ordered.length; i++) {
       if(i == 0) {
         result += ordered[0];
       }
       if(i == 1)  {
         result += ordered[1];
       }
     }
     return result;
   };