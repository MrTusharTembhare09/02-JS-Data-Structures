// Function to get prime factors of a number and store them in an array
function getPrimeFactors(n) {
    let factors = [];

    // Checking for divisibility by 2
    while (n % 2 === 0) {
        factors.push(2);
        n = Math.floor(n / 2);
    }

    // Checking for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = Math.floor(n / i);
        }
    }

    // If n is still greater than 2, then it is a prime number
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Reading user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number to find its prime factors: ", num => {
    num = parseInt(num);
    if (num > 1) {
        let primeFactors = getPrimeFactors(num);
        console.log(`Prime Factors of ${num}:`, primeFactors);
    } else {
        console.log("Please enter a number greater than 1.");
    }
    readline.close();
});
