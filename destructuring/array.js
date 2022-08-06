const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Array combining with spread operator.
const combined = [...arr1, ...arr2];
console.log(combined);

// Array combining with concat method.
const [first, second, third, ...rest] = combined;
console.log(first, second, third, rest);

// https://www.youtube.com/watch?v=NIq3qLaHCIs
function sumAndMultiply(a, b) {
    return [a + b, a * b];
}

const [sum, multiply] = sumAndMultiply(2, 3);
console.log(sum, multiply);
