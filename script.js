"use strict";

//

// const mainGame = function () {
//     printOut(introMessage);
//     // printOut("The game is afoot!");
//     // stateLocation();
//     giveOptions();
// };

// const stateLocation = function () {
//     message = "You are ";
//     message += playerLocation[location].place;
//     console.log(message);
// };

// const giveOptions = function () {
//     console.log("attack or retreat!");
// };

// ************************************
// ********* GAME VARIABLE INITS ******
// ************************************

// const playerLocation = [
//     {
//         place: "in a courtyard at the entrance to the Dreadful Ogre's castle. The iron portcullis is sealed behind you. There is no escape. There are doors to the North, East, and West.",
//         doors: [1, 2, 4],
//     },
// ];

// console.log(playerLocation[0].place);
// let playerLoc = 0;

// let okPressed = false;
// const okBtn = document.querySelector(".button1");
// okBtn.addEventListener("click", () => {
//     okPressed = true;
// });

// ! currently blocked by browser security feature(s)
// const introTheme = new Audio("sound/adventure.mp3");
// introTheme.play();
// ! currently blocked etc

// let character = {
//     charName: "Addy",
//     charLife: 10,
// };

// let inventory = [
//     {
//         weapon: "sword",
//         weaponIcon: "⚔️",
//         shield: true,
//         "health potion": 3,
//     },
// ];

// let enemy1 = {
//     enemyName: "Deformed Goblin",
//     enemyLife: 5,
// };
// let enemy2 = {
//     enemyName: "Cunning Wizard",
//     enemyLife: 10,
// };
// let enemy3 = {
//     enemyName: "Dreadful Ogre",
//     enemyLife: 20,
//     enemyPic: `/images/dreadfulogre.png`,
// };
// ************************************
// ************************************
// ************************************

// *********************************************
// ******* THE FAMOUS PRINTOUT FUNCTION ********
// *********************************************

// const printWithDelay = function (charToShow, letter) {
//     setTimeout(function () {
//         if (charToShow != "|") container.innerHTML += charToShow;
//         if (charToShow == "|") container.innerHTML += `<br>`;
//     }, letter * 45);
// };

// const printOut = function (message) {
//     for (let letter = 0; letter < message.length; letter++) {
//         if (message[letter] == "|") {
//             container.innerHTML += "<br>";
//         }
//         printWithDelay(message[letter], letter);
//     }
//     container.innerHTML += `<br>`;
// };

// async function printOut(message) {
//     for (let letter = 0; letter < message.length; letter++) {
//         if (message[letter] == "|") {
//             container.innerHTML += "<br>";
//         }
//         await printWithDelay(message[letter], letter);
//     }
//     container.innerHTML += `<br>`;
// }

// let introMessage = `Welcome, Adventurer! 🏰 | Your name is ${character.charName}. | You carry a ${inventory[0].weapon}${inventory[0].weaponIcon} | You also have a shield 🛡️ | Neither are very good. | You will have to find better equipment to take on the ${enemy3.enemyName}...👿 | In the Arena of Death! 💀 | ---------------------------------------------`;

// mainGame();

// ! __________________________________________________________________

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
    printToScreen(`You are in ${worldLocations[playerLocation].placeName}.`);
    if (worldLocations[0].pickups) {
        let itemNow = 0;
        for (
            let item = 0;
            item < worldLocations[playerLocation].pickups.length / 2;
            item++
        ) {
            printToScreen(
                `<br>There is a <span style="color:yellowgreen;">${worldLocations[playerLocation].pickups[itemNow]}</span> here.`
            );
            printToScreen(
                `<br>It is of ${
                    worldLocations[playerLocation].pickups[itemNow + 1]
                } quality.`
            );
            itemNow += 2;
        }
    }

    renderExits(worldLocations[playerLocation].exits);
    container.innerHTML += "<br><br>What will you do?<br><br>";
    const northBtn = document.querySelector(".North");
    northBtn.addEventListener("click", () => {
        playerLocation = 1;
        getPlayerMove();
    });
};

// ***********************************************
// *************** THE ROOMS *********************
// ***********************************************

let exitNames = ["North", "East", "South", "West", "Down", "Up"];

let worldLocations = {
    0: {
        placeName: "the Courtyard of Castle Deth",
        exits: [1, 1, 1, 1, 1, 0],
        description: "A dusty courtyard at the entrance of Castle Deth.",
        verboseDescription:
            "Nobody would have believed that the courtyard to a place such as Castle Deth could be so ordinary. You could be standing in any courtyard in any castle or mansion in the world. There is nothing to indicate the great Evil that haunts this place. One's flabber is truly gasted.",
        pickups: [],
    },
    1: {
        placeName: "the grand hall",
        exits: [0, 0, 1, 0, 0, 0],
        description: "The grand hall in Castle Deth.",
        verboseDescription:
            "The grand hall is empty. The feasting tables and benches are laid as if for a great party. There is only dust and the bones here.",
        pickups: ["sword", "GOOD", "shield", "AVERAGE"],
    },
};

// ***********************************************

let playerLocation = 0;

getPlayerMove();
