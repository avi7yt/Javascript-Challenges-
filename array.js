// 1. Print All Elements
const num = [1, 2, 3, 4];
num.forEach((el) => console.log(el));

// 2. Sum of All Elements
const num2 = [10, 20, 30];
const sum = num2.reduce((sum, el) => {
    return sum + el;
}, 0);
console.log(sum);

// 3. Find Maximum Number
const num3 = [3, 7, 2, 9, 1];
const max = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
    }
}
    return max;
}

console.log(max([2,4,5,6,8,9,0,100]));

// 4. Find Minimum Number
const min = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(min([2,3,4,5,6,7]));

// 5. Count Even Numbers
const countEvenNumber = (arr) => {
    const count = arr.filter((el) => el % 2 === 0);
    return count.length;
};

console.log(countEvenNumber([2,3,4,5,6,7,8]));

// 6. Count Odd Numbers
const countOddNumber = (arr) => {
    const count = arr.filter((el) => el % 2 != 0);
    return count.length;
};
console.log(countOddNumber([2,3,4,5,6,7,8,9]));

// 7. Reverse an Array
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const reverseArray = (arr) => {
    let reverseArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i]);
    }
    return reverseArray;
};
console.log(reverseArray(arr));

// 8. Check if Element Exists
const contains = (arr, key) => {
    const result = arr.filter((val) => key === val);
    if (result.length != 0) {
        return true;
    }
    return false;
};
console.log(contains([1, 2, 3], 2));
console.log(contains([1, 2, 3], 5));

const countOccurences = (arr, key) => {
    let count = arr.filter((el) => key === el);
    return count.length;
};

console.log(countOccurences([1, 2, 2, 3, 2], 2));

// 10. Copy Array Manually
const originalArr = [2, 3, 4, 5, 6, 7, 89, 100];
const copiedArr = [];
originalArr.forEach((el) => {
    copiedArr.push(el);
});
console.log(copiedArr);

// 🟡 Level 2: Intermediate Challenges

// 11. Remove Duplicates
const unique = [...new Set([1, 2, 2, 3, 2])];
console.log(unique);
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueFruits = fruits.filter((fruit, index) => fruits.indexOf(fruit) === index);
console.log(uniqueFruits);

// 12. Find Second Largest Number
const number = [1, 2, 3, 4, 5, 6];
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = - Infinity;

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? "No second largest found" : secondLargest;
}
console.log(findSecondLargest(number));






