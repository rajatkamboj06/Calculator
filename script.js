let display = document.getElementById('display');

function append(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}