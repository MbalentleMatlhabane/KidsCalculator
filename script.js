document.addEventListener("DOMContentLoaded", function () {

    const display = document.getElementById("display");

    const clickSound = document.getElementById("clickSound");
    const clearSound = document.getElementById("clearSound");
    const equalsSound = document.getElementById("equalsSound");
    const errorSound = document.getElementById("errorSound");

    let isMuted = false;

    function playSound(sound) {
        if (!isMuted && sound) {
            sound.currentTime = 0;
            sound.play();
        }
    }

    // Make functions global
    window.addValue = function (value) {
        display.value += value;
        playSound(clickSound);
    };

    window.clearDisplay = function () {
        display.value = "";
        playSound(clearSound);
    };

    window.calculate = function () {
        try {
            display.value = eval(display.value);
            playSound(equalsSound);
        } catch {
            display.value = "Oops!";
            playSound(errorSound);
        }
    };

    // 🔇 Mute / Unmute function
    window.toggleMute = function () {
        isMuted = !isMuted;

        const muteButton = document.querySelector(".btn-mute");
        muteButton.textContent = isMuted ? "🔇 Sound OFF" : "🔊 Sound ON";
    };

    window.changeTheme = function (theme) {
    const calculator = document.querySelector(".calculator");

    calculator.classList.remove(
        "blue-theme",
        "pink-theme",
        "green-theme",
        "purple-theme"
    );

    calculator.classList.add(theme + "-theme");
    document.querySelector(".calculator").classList.add("blue-theme");

};
});
