 // Select all required elements
const selectBoxs = document.getElementById("ticTacto-header");
    const playerXbtn = document.getElementById("player-x");
    const playerObtn = document.getElementById("player-o");

const players = document.querySelector(".players");
    const playerX = document.getElementById("Xturn");
    const playerO = document.getElementById("Oturn");

const playBoard = document.getElementById("ticTacto-board");
    const playBox = document.querySelectorAll("#ticTacto-board section span");


window.onload = () => {

    for (let i = 0; i < playBox.length; i++) {
        // add onclick attribute in all available box
        playBox[i].setAttribute("onclick", "clickedBox(this)");
    };

    playerXbtn.onclick = () => {
        playerX.classList.add("active");
        playerO.classList.remove("active");
        players.classList.add("playerX");

    }

    playerObtn.onclick = () => {
        playerO.classList.add("active");
        playerX.classList.remove("active");
        players.classList.remove("playerX");
    }

}

// function clickedBox
function clickedBox(element) {
    if (players.classList.contains("playerX")) {
        element.innerHTML = 'X'
            players.classList.remove("playerX");
            playerO.classList.add("active");
            playerX.classList.remove("active");
    } else {
        element.innerHTML = 'O'
            players.classList.add("playerX");
            playerX.classList.add("active");
            playerO.classList.remove("active");
    }

    element.style.pointerEvents = "none"

}