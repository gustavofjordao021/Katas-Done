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