import { worldLocations, exitNames } from "./world.js";
import { playerInventory } from "./player.js";

let btn1Pressed, btn2Pressed, btn3Pressed, btn4Pressed;

// * defines the display area on screen
const container = document.querySelector(".container");

const actionOne = document.querySelector(".action1");
const actionTwo = document.querySelector(".action2");

actionOne.addEventListener("click", () => {
    console.log("Action 1");
});

actionTwo.addEventListener("click", () => {
    console.log("Action 2");
});

// * define and assign UI controls (temporary)

const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");
const btn4 = document.querySelector(".button4");

btn1.addEventListener("click", () => {
    if (worldLocations[playerLocation].exits[0]) {
        playerLocation = worldLocations[playerLocation].exits[0];
        getPlayerMove(worldLocations[playerLocation]);
    } else {
        container.innerHTML += "Not that way.";
    }
});
btn2.addEventListener("click", () => {
    if (worldLocations[playerLocation].exits[1]) {
        playerLocation = worldLocations[playerLocation].exits[1];
        getPlayerMove(worldLocations[playerLocation]);
    } else {
        container.innerHTML += "Not that way.";
    }
});
btn3.addEventListener("click", () => {
    if (worldLocations[playerLocation].exits[2]) {
        playerLocation = worldLocations[playerLocation].exits[2];
        getPlayerMove(worldLocations[playerLocation]);
    } else {
        container.innerHTML += "Not that way.";
    }
});
btn4.addEventListener("click", () => {
    if (worldLocations[playerLocation].exits[3]) {
        playerLocation = worldLocations[playerLocation].exits[3];
        getPlayerMove(worldLocations[playerLocation]);
    } else {
        container.innerHTML += "Not that way.";
    }
});

// * handles output
const printToScreen = function (message) {
    container.innerHTML += message;
};

const renderExits = function (exits) {
    btn1.textContent = "";
    btn2.textContent = "";
    btn3.textContent = "";
    btn4.textContent = "";
    let theExits = "<br>";
    for (let exit in exits) {
        if (exits[exit]) {
            theExits += `<p class="touchable ${exitNames[exit]}">${exitNames[exit]}</p>`;
            if (exit == 0) btn1.textContent = `Go ${exitNames[exit]}`;
            if (exit == 1) btn2.textContent = `Go ${exitNames[exit]}`;
            if (exit == 2) btn3.textContent = `Go ${exitNames[exit]}`;
            if (exit == 3) btn4.textContent = `Go ${exitNames[exit]}`;
        }
    }
    if (theExits == "<br>") {
        container.innerHTML += "<br><br>There is no way out!";
        return;
    }
    container.innerHTML += `<br><br>There are exits to the ${theExits}`;
};

const getPlayerMove = function (wherePlayer) {
    console.log(worldLocations[playerLocation].exits);
    container.innerHTML = "";
    // btnArea.innerHTML = "";
    printToScreen(`You are in ${wherePlayer.placeName}.`);
    if (worldLocations[playerLocation].pickups) {
        let itemNow = 0;
        for (let item = 0; item < wherePlayer.pickups.length / 2; item++) {
            printToScreen(
                `<br>There is a <span style="color:yellowgreen;">${wherePlayer.pickups[itemNow]}</span> here.`
            );
            actionOne.textContent = `Take ${wherePlayer.pickups[itemNow]}`;
            printToScreen(`<br>${wherePlayer.pickups[itemNow + 1]}`);
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
