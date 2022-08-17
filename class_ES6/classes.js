// Info taken from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// Classes in JS are basically a blueprint for creating objects.
// Objects are similiar to JSON, they hold data.
// With classes, you can create multiple similar objects with
//  different data/values.

class Rectangle {
    constructor(height, width) {
        // Here we are declaring properties for our objects.
        // Rectangle class will now have a height and width property, like
        // an classic Javascript object would and can be called like this:
        // myRectangle.height; // example: 10
        // myRectangle.width; // example: 20
        this.height = height;
        this.width = width;
    }
}

const rect1 = new Rectangle(1, 1);
// By assigning the class name with params to a variable, we basically
// created a variable that holds an object.

// So it would look like this:
// const rect1 = {
//     height: 1,
//     width: 1
// }

// It is shorter to write multiple objects this way, saving space.

const rect2 = new Rectangle(2, 2);

const myRectangles = {
    rect1,
    rect2,
};

console.log(myRectangles);
// Inspect the console.
