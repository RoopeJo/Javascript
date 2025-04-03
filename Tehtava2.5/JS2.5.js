`use strict`;

function getNumbers() {
    let numbers = new Set();

    while (true) {
        let num = parseFloat(prompt("Enter a number:"));

        if (numbers.has(num)) {
            alert("Number already given! Stopping program.");
            break;
        }

        numbers.add(num);
    }

    let sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    console.log("Numbers in ascending order:");
    sortedNumbers.forEach(num => console.log(num));
}
