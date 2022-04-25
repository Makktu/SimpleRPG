import { worldLocations, exitNames } from "./world.js";
import { playerCharacter } from "./player.js";

let btn1Pressed, btn2Pressed, btn3Pressed, btn4Pressed;

// * defines the display area on screen
const container = document.querySelector(".container");

// * define and assign UI controls (temporary)

const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");
const btn4 = document.querySelector(".button4");

btn1.addEventListener("click", () => {
    // check that the button has an option attached to it

    // if so, implement the choice
    playerLocation = worldLocations[playerLocation].exits[0];
    getPlayerMove(worldLocations[playerLocation + 1]);
});
btn2.addEventListener("click", () => {
    playerLocation = worldLocations[playerLocation].exits[1];
    getPlayerMove(worldLocations[playerLocation + 1]);
});
btn3.addEventListener("click", () => {
    playerLocation = worldLocations[playerLocation].exits[2];
    getPlayerMove(worldLocations[playerLocation]);
});
btn4.addEventListener("click", () => {
    playerLocation = worldLocations[playerLocation].exits[3];
    getPlayerMove(worldLocations[playerLocation]);
});

// * handles output
const printToScreen = function (message) {
    container.innerHTML += message;
};

const renderExits = function (exits) {
    let theExits = "<br>";
    for (let exit in exits) {
        if (exits[exit]) {
            theExits += `<p class="touchable ${exitNames[exit]}">${exitNames[exit]}</p>`;
        }
    }
    container.innerHTML += `<br><br>There are exits to the ${theExits}`;
};

const getPlayerMove = function (wherePlayer) {
    container.innerHTML = "";
    printToScreen(`You are in ${wherePlayer.placeName}.`);
    if (worldLocations[playerLocation + 1].pickups) {
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

    // ! janky for now – work on this next
    // NEED TO MOVE PLAYER
};

let playerLocation = 1;
getPlayerMove(worldLocations[playerLocation]);
