let isBulbOn = document.getElementById("lightBulb");
let onSwitch = document.getElementById("onSwitch");
let offSwitch = document.getElementById("offSwitch");
let sound = document.getElementById("clickSound");
let numberofClicks = document.getElementById("clickAttempts");

function turnOn() {

    onSwitch.addEventListener("click", function() {

        document.getElementById("lightBulb").style.color = `yellow`;

        sound.currentTime = 0;

        sound.play();

    });

};

function turnOff() {

    offSwitch.addEventListener("click", function() {

        document.getElementById("lightBulb").style.color = `black`;

        sound.currentTime = 0;

        sound.play();

    });
};

