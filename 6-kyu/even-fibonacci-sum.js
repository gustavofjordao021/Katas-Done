// link: https://www.codewars.com/kata/55688b4e725f41d1e9000065/
/* Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

`0 1 1 2 3 5 8 13 21...`

For example:
  fibonacci(0)==0
  fibonacci(33)==10
  fibonacci(25997544)==19544084
*/

function fibonacci(max) {
	let sum = 0;
	let n1 = 0,
		n2 = 1,
		nextNumber;
	for (let i = 1; i < max; i++) {
		if (nextNumber > max) {
			break;
		}
		nextNumber = n1 + n2;
		if (nextNumber % 2 == 0 && nextNumber < max) {
			sum += nextNumber;
		}
		n1 = n2;
		n2 = nextNumber;
	}
	return sum;
}
