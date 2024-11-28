let btn = document.querySelector(".btn");
let score = 0;
let scoreDisplay = document.querySelector(".score-display");
let leveldisplay = document.querySelector(".leveldisplay");
let comboDisplay = document.getElementById("combo");
let level = 0;
let lastClickTime = 0;
let comboTimeout;

function update() {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
}

function upd() {
    level += 1;
    leveldisplay.textContent = `Level: ${level}`;
}

function updatelevel() {
    if (score === 30 || score === 60 || score === 90 || score === 100 || score === 130 || score === 160 || score === 190 || score === 200 || score === 240 ||  score === 260 || score === 290 ||  score === 300 ||) {
        upd();
    }
}

function checkCombo() {
    const currentTime = Date.now();
    if (currentTime - lastClickTime <= 300) {
        // If the user clicks within 300ms, trigger the combo animation
        comboDisplay.style.opacity = 1;
        comboDisplay.style.animation = "comboExplosion 1s ease-in-out";
        clearTimeout(comboTimeout);
        comboTimeout = setTimeout(() => {
            comboDisplay.style.opacity = 0;
            comboDisplay.style.animation = "none"; // Reset animation
        }, 1000); // Combo effect lasts 1 second
    }
    lastClickTime = currentTime;
}


btn.onclick = function () {
    checkCombo();
    updatelevel();
    update();
};
