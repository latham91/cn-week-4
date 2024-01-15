// ACTIVITY 1 //
// Write a function that logs "Hello Codenation" to the console.
// Then write a higher ordfer function which will run the simple function five times
// Even though you call it once.

const helloCodenation = () => {
    console.log("Hello Codenation");
};

const logFiveTimes = (fn) => {
    for (let i = 0; i < 5; i++) {
        fn();
    }
};

logFiveTimes(helloCodenation);

// ACTIVITY 2 //
// Declare a variable with five numbers, then use .map to iterate through the array
// and multiply each item by 3.

const numbersArr = [1, 2, 3, 4, 5];

const multiplyByThree = (array) => {
    return array.map((item) => {
        // map returns a new array.
        return item * 3; // multiply each item in the array by 3.
    });
};

console.log(multiplyByThree(numbersArr)); // returns new array with each item multiplied by 3.

// ACTIVITY 3 //
// Test this function to ensure it works by passing a number to the doMaths function.
// Then passing a number and one of the four maths functions to the returned function.

const add = (num1, num2) => {
    return num1 + num2;
};
const subtract = (num1, num2) => {
    return num1 - num2;
};
const multiply = (num1, num2) => {
    return num1 * num2;
};
const divide = (num1, num2) => {
    num1 / num2;
};

const doMaths = (num1) => {
    return (num2, fn) => {
        // returns a function which takes two arguments, num2 and fn.
        return fn(num1, num2); // returns the result of the function passed in.
    };
};

console.log(doMaths(5)(2, multiply)); // returns 10
// doMaths(5) returns a function which takes two arguments, num2 and fn.
