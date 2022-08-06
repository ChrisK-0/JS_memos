// Lambda, or in common JS wording, arrow function.
// Basically, a shorter way to write functions.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

let test;

// Classic.
https: function moveRight() {
    console.log("Moved Right.");
}

// Arrow function.
const moveLeft = () => {
    console.log("Moved Left.");
};

// Or with one line. From Mozilla docs: for named functions we treat arrow
// expressions like variables.
const moveUp = () => console.log("Moved Up.");
// Short functions without brackets mean that whatever you insert there will
// be treated as a return value. Return value for example, cannot have
// multiple console logs.

// Without declaration, aka anonymous function.
// () => console.log("Moved somewhere.");
// Since this function lacks a name, it cannot be called.
// So we need to apply IIFE to make it work.
// Check IIFE.js if you do not know what IIFE is.
(() => console.log("Moved somewhere."))();

moveRight();
moveLeft();
moveUp();
