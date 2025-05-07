setInterval(setClock, 1000);


// DIGITAL CLOCK - VARIABLES

    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

// ANALOG CLOCK - VARIABLES

    const secondHand = document.getElementById("sec-hand");
    const minuteHand = document.getElementById("min-hand");
    const hourHand = document.getElementById("hour-hand");


// FUNKTION - SET CLOCK
// Set the clock hands and digital time every second
function setClock() {

    let currentTime = new Date();

    // DIGITAL CLOCK - TIME
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

    // ANALOG CLOCK - TIME
    const secondsRatio =    currentTime.getSeconds() / 60;
    const minutesRatio =    (secondsRatio + currentTime.getMinutes()) / 60;
    const hoursRatio =      (minutesRatio + (currentTime.getHours() % 12)) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
    
}

// ANALOG CLOCK
// Set the rotation of the clock hands
function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}