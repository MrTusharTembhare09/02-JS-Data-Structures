// Importing readline for user interaction
const readline = require('readline');

// Function to generate an array of 10 random 3-digit numbers
function generateRandomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * (999 - 100 + 1)) + 100); // Generating 3-digit number
    }
    return arr;
}

// Function to find the 2nd largest and 2nd smallest element without sorting
function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Generating random numbers
let numbers = generateRandomArray();
console.log("Generated Random Numbers:", numbers);

// Finding the 2nd largest and 2nd smallest numbers
let result = findSecondLargestAndSmallest(numbers);

console.log("Second Largest Number:", result.secondLargest);
console.log("Second Smallest Number:", result.secondSmallest);
