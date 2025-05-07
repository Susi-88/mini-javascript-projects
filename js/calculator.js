function appendToDisplay(value) {
    let display = document.getElementById('display');
    // If the display is empty, only allow numbers as the first character
    if (display.value === '' && isNaN(value)) {
        return; // Do nothing if the first character is not a number
    }
    display.value += value;

    // Automatically calculate the result after updating the display
    calculateResult();
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').value = '';
}

function deleteDisplay() {
    let display = document.getElementById('display');
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);

        // Automatically calculate the result after updating the display
        calculateResult();
    }
}

function calculateResult() {
    try {
        let display = document.getElementById('display').value;

        // Replace all occurrences of '%' with '/100'
        let sanitizedDisplay = display.replace(/%/g, "/100");
        let result = eval(sanitizedDisplay);
        document.getElementById('result').value = result;
    } catch (error) {
        return;
    }
}

            
