// Function to roll a die and return a number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to simulate die rolling until one number reaches 10 times
function simulateDieRolls() {
    let dieResults = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let maxNum = null, minNum = null;

    while (!Object.values(dieResults).includes(maxRolls)) {
        let roll = rollDie();
        dieResults[roll]++;
    }

    // Finding the maximum and minimum occurring numbers
    maxNum = Object.keys(dieResults).reduce((a, b) => dieResults[a] > dieResults[b] ? a : b);
    minNum = Object.keys(dieResults).reduce((a, b) => dieResults[a] < dieResults[b] ? a : b);

    console.log("Final Die Rolls Count:", dieResults);
    console.log(`Number that appeared maximum times: ${maxNum}`);
    console.log(`Number that appeared minimum times: ${minNum}`);
}

// Run the simulation
simulateDieRolls();
