"use strict";

// ************************************
// ********* GAME VARIABLE INITS ******
// ************************************
let character = {
    charName: "Addy",
    charLife: 10,
};

let inventory = [
    {
        weapon: "sword ⚔️",
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

const printOut = function (message, color = "white") {
    message == "blank"
        ? (container.innerHTML += "<br><br>")
        : (container.innerHTML += `<span style="color:${color}"><br>⟫  ${message}</span>`);
    console.log(message.length);
};

const timeDelay = function (message) {
    console.log("begin!");
    let thisMessage;
    for (let o = 0; o < message.length; o++) {
        setTimeout(() => {
            thisMessage += message.slice(o, o + 1);
            console.log(thisMessage);
        }, 20000);
    }
};

printOut("Welcome, Adventurer! 🏰");

timeDelay("Testing");

printOut(`Your name is ${character.charName}`, "cyan");
printOut(`You carry a ${inventory[0].weapon}`, "green");
inventory[0].shield ? printOut("You also have a shield 🛡", "green") : null;
printOut(
    `Neither are very good. You will have to find better equipment to take on the ${enemy3.enemyName}`
);

printOut(`<img src=${enemy3.enemyPic}>`);
printOut(`In the Death Arena...`);
printOut(`You have ${character.charLife} ♥️ Life remaining.`, "green");
printOut(
    `You are carrying 💊 ${inventory[0]["health potion"]} health ${
        inventory[0]["health potion"] > 1 ? "packs" : "pack"
    }.`,
    "green"
);

printOut("blank");

printOut("Tap 'BEGIN' to, ah, begin...", "yellow");
