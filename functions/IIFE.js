// Immediately invoked function expression, IIFE.
// Basically, a function that is executed immediately when it is defined.

// If you've seen "!" before a function, read this from stackoverflow:
// https://stackoverflow.com/a/5654929/19225390

(function () {
    // console.log("IIFE fired!");
})();

let banana = "banana";

(function () {
    if (banana === "eaten") {
        // console.log("Banana was eaten!");
    }
    banana = "eaten";
})();

// console.log(banana);
