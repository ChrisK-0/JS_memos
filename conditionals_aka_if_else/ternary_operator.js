// Mozilla docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// Ternary operator can be used as a shorter if/else statement.

// For variables.
let weather = "sunny";
let rainStatus = "not raining";

// Most common
if (rainStatus === "raining") {
    weather = "rainy";
} else {
    weather = "sunny";
}
console.log(weather);

weather === "raining" ? (weather = "rainy") : (weather = "sunny");
console.log(weather);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// For function invocation.
function goOutside() {
    console.log("I am going outside.");
}

function stayInside() {
    console.log("I am staying inside.");
}

weather === "not raining" ? goOutside() : stayInside();

// Just console log.
weather === "not raining"
    ? console.log("I am going outside.")
    : console.log("I am staying inside.");
