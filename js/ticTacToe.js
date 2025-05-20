// Select all required elements
    const selectBoxs = document.getElementById("ticTacto-header");
        const playerXbtn = document.getElementById("player-x");
        const playerObtn = document.getElementById("player-o");

    const players = document.querySelector(".players");
        const playerX = document.getElementById("Xturn");
        const playerO = document.getElementById("Oturn");

    const playBoard = document.getElementById("ticTacto-board");
        const playBox = document.querySelectorAll("#ticTacto-board section span");

// Variables for game state


// Initialize the game
window.onload = () => {

    for (let i = 0; i < playBox.length; i++) {
        // add onclick attribute in all available box
        playBox[i].setAttribute("onclick", "clickedBox(this)");
    };

    // player X selection
    playerXbtn.onclick = () => {
        playerX.classList.add("active");
        playerO.classList.remove("active");
        players.classList.add("playerX");

    }

    // player O selection
    playerObtn.onclick = () => {
        playerO.classList.add("active");
        playerX.classList.remove("active");
        players.classList.remove("playerX");
    }

}

// user click function
function clickedBox(element) {
    if (players.classList.contains("playerX")) {        // if players elemt has contains .playerX
        element.innerHTML = 'X'
            players.classList.remove("playerX");        // adding cross inside the user clicked element
            playerO.classList.add("active");
            playerX.classList.remove("active");
    } else {
        element.innerHTML = 'O'
            players.classList.add("playerX");           // adding circle inside the user clicked element
            playerX.classList.add("active");
            playerO.classList.remove("active");
    }

    element.style.pointerEvents = "none"
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed(); // generating random time delay 
    setTimeout(() => {
        bot();              // calling bot function
    }, randomDelayTime);    // passing randiom delay time
}

// bot click function
function bot() {

    let array = [];       //creating empty array - to store unselected boxes
    for (let i = 0; i < playBox.length; i++) {
        let playBoxContent = playBox[i].innerHTML.trim(); // Whitespace entfernen
    
        if (playBoxContent === "") {
            array.push(i);
            // console.log("Leere Box gefunden bei Index:", i);
        }
    }

    let randomBox = array[Math.floor(Math.random() * array.length)];
    console.log(randomBox);
    if(array.length > 0) {
        if (players.classList.contains("playerX")) {        // if players elemt has contains .playerX
            playBox[randomBox].innerHTML = 'X'
                players.classList.remove("playerX");        // adding cross inside the user clicked element
                playerO.classList.add("active");
                playerX.classList.remove("active");
            } else {
                playBox[randomBox].innerHTML = 'O'
                    players.classList.add("playerX");           // adding circle inside the user clicked element
                    playerX.classList.add("active");
                    playerO.classList.remove("active");
        }

        playBox[randomBox].style.pointerEvents = "none"
    }
    // console.log(array);
}