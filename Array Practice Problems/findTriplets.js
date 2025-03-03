// Function to find and display triplets with sum zero
function findTriplets(arr) {
    let n = arr.length;
    let found = false;

    console.log("Triplets that sum to zero:");

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(`[ ${arr[i]}, ${arr[j]}, ${arr[k]} ]`);
                    found = true;
                }
            }
        }
    }

    if (!found) {
        console.log("No triplets found.");
    }
}

// Reading user input and converting to an array
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter integers separated by spaces: ", input => {
    let arr = input.split(" ").map(Number);
    
    if (arr.length < 3) {
        console.log("Please enter at least 3 numbers.");
    } else {
        findTriplets(arr);
    }
    
    readline.close();
});
