`use strict`;

function getDogNames() {
    let dognames = [];

    for (let i = 0; i < 6; i++) {
        let name = prompt(`Enter name of dog ${i + 1}:`);
        dognames.push(name);
    }

    dognames.sort().reverse();

    let list = document.getElementById("dogList");
    list.innerHTML = "";

    dognames.forEach(name => {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        list.appendChild(listItem);
    });
}
