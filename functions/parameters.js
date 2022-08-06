// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Parameters is pretty straight forward.
// I made this mostly for 'rest' parameters.

const nr1 = 1;
const nr2 = 2;
const nrs = [5, 10, 15, 20];

// Most common.
function sum(one, two) {
    console.log(one + two);
}
sum(nr1, nr2);

// Rest parameters. A function can have only one rest parameter.
function logNumbers(first, second, ...rest) {
    console.log(`First two: ${first}, ${second}`);
    console.log(`Others: ${rest}`);
}

logNumbers(nrs[0], nrs[1], nrs[2], nrs[3]);
