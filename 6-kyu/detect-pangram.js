// link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    let lowerCase = string.toLowerCase()
    let letters = [];
    for (let i = 0; i < lowerCase.length; i++) {
      if (lowerCase.charCodeAt(i) >= 97 &&   lowerCase.charCodeAt(i) <= 122) {
        if (!letters.includes(lowerCase.charAt(i))) {
          letters.push(lowerCase.charAt(i))
        }
      }
    }
    if (letters.length < 26) {
      return false;
    } else {
      return true;
    }
}