`use srict`;

let num1 = +prompt("Enter first integer:");
let num2 = +prompt("Enter second integer:");
let num3 = +prompt("Enter third integer:");

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.body.innerHTML = `<p>Sum: ${sum}</p>
                           <p>Product: ${product}</p>
                           <p>Average: ${average.toFixed(2)}</p>`;