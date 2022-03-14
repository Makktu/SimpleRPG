"use strict";

// ************************************
// ********* GAME VARIABLE INITS ******
// ************************************
let nextColor = false;
let color = "white";
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

const printWithDelay = function (charToShow, letter, message) {
    if (charToShow == "#") {
        // ! this is where we somehow leverage the embedded color info in the messages to make that entire line that color...
        if (message[letter - 1] == "#") return;
        if (message[letter] == "#") {
            if (message[letter + 1] == "y") color = "yellow";
            // if (charToShow === "g") color = "green";
            // if (charToShow === "w") color = "white";
            // if (charToShow === "r") color = "red";
        }
    }
    setTimeout(function () {
        if (charToShow != "|")
            container.innerHTML += `<span style="color:${color}">${charToShow}</span>`;
        if (charToShow == "|") container.innerHTML += `<br>`;
        console.log(color);
    }, letter * 35);
};

const printOut = function (message) {
    for (let letter = 0; letter < message.length; letter++) {
        printWithDelay(message[letter], letter, message);
    }
    container.innerHTML += `<br>`;
};

let introMessage = `#g Welcome, Adventurer! 🏰 | Your name is ${character.charName} | #g You carry a ${inventory[0].weapon}${inventory[0].weaponIcon} | You also have a shield 🛡️ | #w Neither are very good. | You will have to find better equipment to take on the ${enemy3.enemyName}...👿 | #r In the Arena of Death! 💀`;

printOut(introMessage);

// printOut(`}`, "green");
// inventory[0].shield ? printOut("You also have a shield 🛡️", "green") : null;
// printOut(
//     `Neither are very good.  You will have to find better equipment to take on the ${enemy3.enemyName}.`
// );

// // printOut(`<img src=${enemy3.enemyPic}>`, "image");
// printOut(`In the Death Arena...`);
// printOut(`You have ${character.charLife} Life remaining.`, "green");
// printOut(
//     `You are carrying ${inventory[0]["health potion"]} health ${
//         inventory[0]["health potion"] > 1 ? "packs" : "pack"
//     }.`,
//     "green"
// );

// printOut("blank");

// printOut("Tap 'BEGIN' to, ah, begin...", "yellow");
