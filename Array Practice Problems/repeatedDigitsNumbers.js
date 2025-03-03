// Function to find numbers with repeated digits in range 0-100
function findRepeatedDigitsNumbers() {
    let result = [];

    for (let num = 10; num <= 99; num++) {
        let tens = Math.floor(num / 10);
        let ones = num % 10;

        if (tens === ones) {
            result.push(num);
        }
    }

    return result;
}

// Executing function and displaying result
let repeatedNumbers = findRepeatedDigitsNumbers();
console.log("Numbers with repeated digits:", repeatedNumbers);
