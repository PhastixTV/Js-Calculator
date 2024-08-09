const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        Display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
        console.log(error);
    }
}

function ifErrorClearDisplay() {
    if(display.value = "Error") {
        display.value = "";
    } else 
        return
}