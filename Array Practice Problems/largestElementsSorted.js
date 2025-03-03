// Function to generate an array of 10 random 3-digit numbers
function generateRandomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * (999 - 100 + 1)) + 100); // Generating 3-digit number
    }
    return arr;
}

// Function to find the second largest and second smallest elements after sorting
function findSecondLargestAndSmallestSorted(arr) {
    // Sorting the array in ascending order
    arr.sort((a, b) => a - b);
    
    return {
        secondSmallest: arr[1], // Second element after sorting
        secondLargest: arr[arr.length - 2] // Second last element after sorting
    };
}

// Generating random numbers
let numbers = generateRandomArray();
console.log("Generated Random Numbers:", numbers);

// Sorting and finding the second largest and smallest numbers
let result = findSecondLargestAndSmallestSorted(numbers);

console.log("Sorted Array:", numbers);
console.log("Second Smallest Number:", result.secondSmallest);
console.log("Second Largest Number:", result.secondLargest);
