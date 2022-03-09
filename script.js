"use strict";

const container = document.querySelector(".container");

const printOut = function (message) {
    container.innerHTML += `<br>${message}`;
};

const timeDelay = function (duration) {
    setTimeout(() => {}, duration);
};

printOut("Welcome, Adventurer! 🏰");

timeDelay(5);

printOut(
    "Do you want to enter a name? (One will be chosen at random for you if you choose No.)"
);

printOut(`<span style="font-size:2rem;">YES / NO</span>`);
