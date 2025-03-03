// Function to generate a random birth month (1 to 12)
function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

// Function to generate birth months for 50 individuals and group them by month
function generateBirthMonthDistribution() {
    let birthMonthData = {};

    // Generate birth months for 50 individuals
    for (let i = 1; i <= 50; i++) {
        let month = getRandomMonth();
        
        // If month key doesn't exist, initialize it as an empty array
        if (!birthMonthData[month]) {
            birthMonthData[month] = [];
        }
        
        // Add individual to the respective month
        birthMonthData[month].push(i);
    }

    // Print the birth month distribution
    console.log("Birth Month Distribution:");
    for (let month in birthMonthData) {
        console.log(`Month ${month}: Individuals ->`, birthMonthData[month]);
    }
}

// Run the function
generateBirthMonthDistribution();
