let isBulbOn = document.getElementById("lightBulb");
let onSwitch = document.getElementById("onSwitch");
let offSwitch = document.getElementById("offSwitch");
let sound = document.getElementById("clickSound");
let clickAttempts = 0;

function turnOn() {

    onSwitch.addEventListener("click", () => {

        document.getElementById("lightBulb").style.color = `yellow`;

        sound.currentTime = 0;

        sound.play();

    });

    document.getElementById("clickAttempts").innerHTML = `Number of Click Attempts: ${clickAttempts}`;

    console.log(clickAttempts++);

};

function turnOff() {

    offSwitch.addEventListener("click", () => {

        document.getElementById("lightBulb").style.color = `black`;

        sound.currentTime = 0;

        sound.play();

    });

    document.getElementById("clickAttempts").innerHTML = `Number of Click Attempts: ${clickAttempts}`;

    console.log(clickAttempts++);

};
