`use strict`;

function getNumbers() {
    let numbers = [];

    for (let i = 0; i < 5; i++) {
        let num = parseFloat(prompt(`Enter number ${i + 1}:`));
        numbers.push(num);
    }

    let outputText = "Numbers in reverse order:<br>";
    for (let i = numbers.length - 1; i >= 0; i--) {
        outputText += numbers[i] + "<br>";
    }

    document.getElementById("output").innerHTML = outputText;
}