// link: https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4" There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there"
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
function encode(string) {
  let finalWord = [];
  string.split("").forEach((letter) => {
    switch (letter) {
      case "a":
        finalWord.push("1");
        break;
      case "e":
        finalWord.push("2");
        break;
      case "i":
        finalWord.push("3");
        break;
      case "o":
        finalWord.push("4");
        break;
      case "u":
        finalWord.push("5");
        break;
      default:
        finalWord.push(letter);
        break;
    }
  });
  return finalWord.join("");
}

function decode(string) {
  let finalWord = [];
  string.split("").forEach((letter) => {
    switch (letter) {
      case "1":
        finalWord.push("a");
        break;
      case "2":
        finalWord.push("e");
        break;
      case "3":
        finalWord.push("i");
        break;
      case "4":
        finalWord.push("o");
        break;
      case "5":
        finalWord.push("u");
        break;
      default:
        finalWord.push(letter);
        break;
    }
  });
  return finalWord.join("");
}
