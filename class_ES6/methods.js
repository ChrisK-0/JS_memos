// With classes, you can also create methods.
// Methods can be considered as functions that are attached to the class.

class Square {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // "get" keyword is called a getter. This turns allows method functions
    // to be invoked. If you would remove get from area()
    // method(aka class function), it would console log the function and
    // not the formula data
    get area() {
        return this.height * this.width;
    }

    // set sum(height) {
    //     return this.height + this.width;
    // }
}

const square1 = new Square(5, 5);

// With the created area method, we can use it for Square class objects.
console.log(square1.area);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
    }

    // Here is a setter method with "set" keyword.
    // This can be used for changing the value of a property.
    set rename(newName) {
        this.name = newName;
    }
}

const person1 = new Person("Jeff", 20);
// Using the setter, we can change the name of the person.
person1.rename = "Joff";
console.log(person1.getName);

// In objects, you can also define functions, which are very similar
// to getter methods in classes. However, they are invoked like
// regular functions, with braces that can include parameters.
// Getters can not have parameters.

const customObject = {
    name: "Jeff",
    age: 20,
    getName: function () {
        return this.name;
    },
};

console.log(customObject.getName());
