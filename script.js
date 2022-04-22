import { worldLocations, exitNames } from "./world.js";

const container = document.querySelector(".container");

const printToScreen = function (message) {
    container.innerHTML += message;
};

const renderExits = function (exits) {
    let theExits = "<br>";
    for (let exit in exits) {
        if (exits[exit] == 1) {
            theExits += `<p class="touchable ${exitNames[exit]}">${exitNames[exit]}</p>`;
        }
    }
    container.innerHTML += `<br><br>There are exits to the ${theExits}`;
};

const getPlayerMove = function () {
    let wherePlayer = worldLocations[playerLocation];
    console.log(wherePlayer.verboseDescription);
    printToScreen(`You are in ${wherePlayer.placeName}.`);
    if (worldLocations[0].pickups) {
        let itemNow = 0;
        for (let item = 0; item < wherePlayer.pickups.length / 2; item++) {
            printToScreen(
                `<br>There is a <span style="color:yellowgreen;">${wherePlayer.pickups[itemNow]}</span> here.`
            );
            printToScreen(
                `<br>It is of ${wherePlayer.pickups[itemNow + 1]} quality.`
            );
            itemNow += 2;
        }
    }

    renderExits(wherePlayer.exits);
    container.innerHTML += "<br><br>What will you do?<br><br>";
    const northBtn = document.querySelector(".North");
    northBtn.addEventListener("click", () => {
        playerLocation = 1;
        getPlayerMove();
    });
};

let playerLocation = 0;

getPlayerMove();
