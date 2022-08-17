// Basically, able to choose an object and turn it into a variable.

// Most content here is from the below link:
// https://www.youtube.com/watch?v=NIq3qLaHCIs

const car1 = {
    mark: "Lada",
    year: "1891",
    color: "black",
    engine: {
        type: "gas",
        volume: "1.5",
        power: "100",
    },
};

const {
    mark,
    color,
    weight = "No weight specified",
    // Turned 'type' from car1 object 'engine' into a variable.
    engine: { type },
} = car1;

console.log(mark);
console.log(color);
console.log(weight);
console.log(type);

// Object merging.
const person1 = {
    name: "Zeus",
    age: "190",
    power: "lightning",
    popularity: "super",
};
const person2 = {
    name: "Poseidon",
    power: "water",
    gimmick: "underwater breathing",
};

const scienceExperiment = { ...person1, ...person2 };
// Existing properties got overwritten.
console.log(scienceExperiment);

// Compare the 2 function parameters.

// function printUser(user) {
//     console.log(`${user.name} is ${user.age} years old.`);
// }

function printUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
}

printUser(person1);
