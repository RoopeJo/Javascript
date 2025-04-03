`use strict`;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
    let rolls = [];
    let roll;
    do {
        roll = rollDice();
        rolls.push(roll);
    } while (roll !== 6);

    let list = document.getElementById("rollList");
    list.innerHTML = "";
    rolls.forEach(roll => {
        let listItem = document.createElement("li");
        listItem.textContent = `Rolled: ${roll}`;
        list.appendChild(listItem);
    });
}

