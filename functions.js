// Part 2: Function Mastery Challenges

// Level 1 — Function Types

// 16. Write same function in:
// Function Declaration
function sum(a, b) {
    return a + b;
}
console.log(sum(3,4));

// Function Expression
const sumWithExp = function (a, b) {
    return a + b;
}
console.log(sumWithExp(6,7));

// Arrow Function
const sumWithArrow = (a,b) => {
    return a + b;
}
console.log(sumWithArrow(8,9));

// IIFE
console.log((function (a, b) {
    return a+b
})(5,7));
// Task: Add two numbers.

// 17. Convert Traditional to Arrow
// Traditional
function greet(name = 'guest') {
    return `Hi! ${name}`
};
console.log(greet());

// Arrow function
const greetUser = (name = "guest") => `Hi ${name}`;  
console.log(greetUser("Rohit"));

// Level 2 — Parameters vs Arguments

// 18. Greeting Function
// Use default parameter.
const greetAgain = (name = "Guest") => `Good Morning, ${name}`;
console.log(greetAgain("Ranjan"));

// 19. Rest Parameters
// Create sum(...numbers)
const sumWithRestPara = (...numbers) => {
    return numbers.reduce((preval, currval) => {
        return preval += currval;
    },0);
}

console.log(sumWithRestPara(23,45,555,55,555,444,2));

// 20. arguments Object
// Use arguments to multiply all values.

// Note: arguments exists only in non-arrow functions.
function multiplyAll() {
    let result = 1;
    
    for (let i = 0; i < arguments.length; i++){
        result *= arguments[i];
    }
    return Array.isArray(arguments);
}
console.log(multiplyAll(2,3,4,5,6,7,8,9));

// Part 3: this Deep Dive

// 21. Normal Function vs Arrow
// Predict outputs. - 
const obj = {
  name: "Avi",
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

obj.normal();
obj.arrow()