`use strict`;

let year = prompt("Enter a year:");

let isLeapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
}

if (isLeapYear) {
    document.body.innerHTML = `<h2>${year} is a leap year!</h2>`;
} else {
    document.body.innerHTML = `<h2>${year} is not a leap year.</h2>`;
}