`use strict`;

function getParticipants() {
    let participants = [];
    let count = parseInt(prompt("Enter the number of participants:"));

    for (let i = 0; i < count; i++) {
        let name = prompt(`Enter name of participant ${i + 1}:`);
        participants.push(name);
    }
    participants.sort();

    let list = document.getElementById("participantList");
    list.innerHTML = "";

    participants.forEach(name => {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        list.appendChild(listItem);
    });
}