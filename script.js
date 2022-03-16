"use strict";

const mainGame = function () {
    printOut(introMessage);
    // printOut("The game is afoot!");
    // stateLocation();
    giveOptions();
};

const stateLocation = function () {
    message = "You are ";
    message += playerLocation[location].place;
    console.log(message);
};

const giveOptions = function () {
    console.log("attack or retreat!");
};

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

let okPressed = false;
const okBtn = document.querySelector(".button1");
okBtn.addEventListener("click", () => {
    okPressed = true;
});

// ! currently blocked by browser security feature(s)
const introTheme = new Audio("sound/adventure.mp3");
// introTheme.play();
// ! currently blocked etc

let character = {
    charName: "Addy",
    charLife: 10,
};

let inventory = [
    {
        weapon: "sword",
        weaponIcon: "⚔️",
        shield: true,
        "health potion": 3,
    },
];

let enemy1 = {
    enemyName: "Deformed Goblin",
    enemyLife: 5,
};
let enemy2 = {
    enemyName: "Cunning Wizard",
    enemyLife: 10,
};
let enemy3 = {
    enemyName: "Dreadful Ogre",
    enemyLife: 20,
    enemyPic: `/images/dreadfulogre.png`,
};
// ************************************
// ************************************
// ************************************

const container = document.querySelector(".container");

// *********************************************
// ******* THE FAMOUS PRINTOUT FUNCTION ********
// *********************************************

const printWithDelay = function (charToShow, letter) {
    setTimeout(function () {
        if (charToShow != "|") container.innerHTML += charToShow;
        if (charToShow == "|") container.innerHTML += `<br>`;
    }, letter * 40);
};

// const printOut = function (message) {
//     for (let letter = 0; letter < message.length; letter++) {
//         if (message[letter] == "|") {
//             container.innerHTML += "<br>";
//         }
//         printWithDelay(message[letter], letter);
//     }
//     container.innerHTML += `<br>`;
// };

async function printOut(message) {
    for (let letter = 0; letter < message.length; letter++) {
        if (message[letter] == "|") {
            container.innerHTML += "<br>";
        }
        await printWithDelay(message[letter], letter);
    }
    container.innerHTML += `<br>`;
}

let introMessage = `Welcome, Adventurer! 🏰 | Your name is ${character.charName} | You carry a ${inventory[0].weapon}${inventory[0].weaponIcon} | You also have a shield 🛡️ | Neither are very good. | You will have to find better equipment to take on the ${enemy3.enemyName}...👿 | In the Arena of Death! 💀 | ---------------------------------------------`;

mainGame();
