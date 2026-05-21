// Beginner Level — Get Comfortable with Numbers
// 1. Even or Odd

function isEven(n) {
    if (n % 2 != 0) {
        return false;
    }
    return true;
};
console.log(isEven(10));
console.log(isEven(1));

// 2. Positive, Negative, or Zero
function checkNumber(n) {
    if (n > 0) {
        return `positive`;
    }else if (n == 0) {
        return `zero`;
    }
    return `negative`;
};
console.log(checkNumber(0));

// 3. Square and Cube
function squareCube(n) {
    const square = n * n;
    const cube = n*n*n;
    return `square: ${square} cube: ${cube}`;
};
console.log(squareCube(3));

// 4. Celsius to Fahrenheit
function celsiusToFaherenheit(temp) {
    return 9 / 5 * temp + 32;
}
console.log(celsiusToFaherenheit(30));

// 5. Find Largest Between Two Numbers
function largest(a, b) {
    if (a > b) {
        return a;
    }
    return b;
};
console.log(largest(3,4));

// 6. Swap Two Numbers
function swap(a,b) {
    let temp = a;
    a = b;
    b = temp;
    return `${a}${b}`
}

console.log(swap(4,5));

// 7. Generate Random Dice Number
const diceNumber = Math.floor(6*Math.random() + 1);
console.log(diceNumber);

// 8. Round a Decimal Number
console.log(Math.floor(4.999));
console.log(Math.ceil(4.999));
console.log(Math.round(4.999));
console.log(4.999.toFixed(6));


