// Select all required elements
    const selectBoxs = document.getElementById("ticTacto-header");
        const playerXbtn = document.getElementById("player-x");
        const playerObtn = document.getElementById("player-o");

    const players = document.querySelector(".players");
        const playerX = document.getElementById("Xturn");
        const playerO = document.getElementById("Oturn");

    const playBoard = document.getElementById("ticTacto-board");
        const playBox = document.querySelectorAll("#ticTacto-board section span");


    // Winning combinations (indexes of fields in the playBox array)
    const winConditions = [
        [0,1,2], // first row
        [3,4,5], // second row
        [6,7,8], // third row
        [0,3,6], // first column
        [1,4,7], // second column
        [2,5,8], // third column
        [0,4,8], // diagonal from top left to bottom right
        [2,4,6]  // diagonal from top right to bottom left
    ];

// Variables for game state
    let gameOver = false;


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

// function to check for a win 
    function checkWin(player) {
        return winConditions.some(condition => {
            return condition.every(index => playBox[index].innerHTML === player);
        });
    }

// user click function
function clickedBox(element) {
    if(gameOver) return;

    if (players.classList.contains("playerX")) {        // if players elemt has contains .playerX
        element.innerHTML = 'X'
            players.classList.remove("playerX");        // adding cross inside the user clicked element
            playerO.classList.add("active");
            playerX.classList.remove("active");

            // Check for win for X
            if(checkWin('X')) {
                gameOver = true;
                alert("Spieler X hat gewonnen!");
                disableAllBoxes();
                return;
            }
    } else {
        element.innerHTML = 'O'
            players.classList.add("playerX");           // adding circle inside the user clicked element
            playerX.classList.add("active");
            playerO.classList.remove("active");

            // Check for win for O
            if(checkWin('O')) {
                gameOver = true;
                alert("Spieler O hat gewonnen!");
                disableAllBoxes();
                return;
            }
    }

    element.style.pointerEvents = "none";

    if([...playBox].every(box => box.innerHTML !== "")) {
        gameOver = true;
        alert("Unentschieden!");
        return;
    }

    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed(); // generating random time delay 
    setTimeout(() => {
        bot();              // calling bot function
    }, randomDelayTime);    // passing randiom delay time
}

// bot click function
function bot() {
    if(gameOver) return;

    let array = [];                                         //creating empty array - to store unselected boxes
    for (let i = 0; i < playBox.length; i++) {
        let playBoxContent = playBox[i].innerHTML.trim();   // Whitespace entfernen
    
        if (playBoxContent === "") {
            array.push(i);
        }
    }

     if(array.length === 0) return;

    let randomBox = array[Math.floor(Math.random() * array.length)];
    console.log(randomBox);
    if(array.length > 0) {
        if (players.classList.contains("playerX")) {        // if players elemt has contains .playerX
            playBox[randomBox].innerHTML = 'X'
                players.classList.remove("playerX");        // adding cross inside the user clicked element
                playerO.classList.add("active");
                playerX.classList.remove("active");

                if(checkWin('X')) {
                    gameOver = true;
                    alert("Spieler X hat gewonnen!");
                    disableAllBoxes();
                    return;
                }
            } else {
                playBox[randomBox].innerHTML = 'O'
                    players.classList.add("playerX");           // adding circle inside the user clicked element
                    playerX.classList.add("active");
                    playerO.classList.remove("active");

                if(checkWin('O')) {
                    gameOver = true;
                    alert("Spieler O hat gewonnen!");
                    disableAllBoxes();
                    return;
                }
        }

        playBox[randomBox].style.pointerEvents = "none";

        if([...playBox].every(box => box.innerHTML !== "")) {
            gameOver = true;
            alert("Unentschieden!");
        }
    }
}

// Function to disable all fields
function disableAllBoxes() {
    for(let i=0; i < playBox.length; i++) {
        playBox[i].style.pointerEvents = "none";
    }
}