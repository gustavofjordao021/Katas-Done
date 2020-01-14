// <!-- link: https://gist.github.com/gustavofjordao021/df7337c6a795fe971ff94a771b8f79ba.
// Coding challenge: Concat first/second diagonal
// Instructions
// Iteration 1
// From a two dimensional array (with the same height and width), extract and concat all the elements from the "first diagonal", starting from the top left corner to the bottom right corner.

// function concatFirstDiagonal(twoDimArray) {
//     // your code goes here
// }
// If given the following array, here is the result you should expect:

// const someArr1 = [
//   ['L','z','x','C','v','B'],
//   ['t','i','I','p','e','7'],
//   ['w','y','s','r','m','x'],
//   ['q','U','l','b','k','H'],
//   ['A','i','G','Y','o','L'],
//   ['n','f','d','W','z','n']
// ];

// // solution:
// console.log(concatFirstDiagonal(someArr1));
// // ==> "Lisbon"


// Iteration 2
// From a two dimensional array (with the same height and width), extract and concat all the elements from the "second diagonal", starting from the top right corner to the bottom left corner.

// function concatSecondDiagonal(twoDimArray) {
//     // your code goes here
// }
// If given the following array, here is the result you should expect:

// const someArr2 = [
//   ['L','z','x','C','v','B'],
//   ['t','i','I','p','e','7'],
//   ['w','y','s','r','m','x'],
//   ['q','U','l','b','k','H'],
//   ['A','i','G','Y','o','L'],
//   ['n','f','d','W','z','n']
// ];

// // solution:
// console.log(concatSecondDiagonal(someArr2));
// // ==> "Berlin"--!>

const someArr1 = [
    ['L','z','x','C','v','B'],
    ['t','i','I','p','e','7'],
    ['w','y','s','r','m','x'],
    ['q','U','l','b','k','H'],
    ['A','i','G','Y','o','L'],
    ['n','f','d','W','z','n']
  ];

function concatFirstDiagonal(someArr1) {
    let firstDiagonal = [];
    for (let i = 0; i < someArr1.length; i++) {
        firstDiagonal.push(someArr1[i][i]);
    }
    console.log(firstDiagonal.join(''));
}

function concatSecondDiagonal(someArr1) {
    let secondDiagonal = [];
    for (let i = 0; i < someArr1.length; i++) {
        secondDiagonal.push(someArr1[i][(someArr1.length - 1) - i]);
    }
    console.log(secondDiagonal.join(''));
}

concatFirstDiagonal(someArr1);
concatSecondDiagonal(someArr1);