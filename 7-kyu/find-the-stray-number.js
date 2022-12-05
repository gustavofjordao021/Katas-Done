//link: https://www.codewars.com/kata/5c44b0b200ce187106452139/
/* 
Targs_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/

function stray(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
			return numbers[i];
		}
	}
}
