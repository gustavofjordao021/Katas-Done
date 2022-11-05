// link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

//Sam Harris => S.H
//patrick feeney => P.F

function abbrevName(name) {
	let abbreviatedName = [];
	let nameToAbbreviate = name.split(" ").forEach((word) => {
		abbreviatedName.push(word.slice(0, 1).toUpperCase());
	});
	abbreviatedName.splice(0, 1, abbreviatedName[0] + ".");
	return abbreviatedName.join("");
}
