//display(val): Appends the clicked number or operator to the calculator's display.

function display(val) {
    document.getElementById('result').value += val;
}


//solve(): Evaluates the expression in the display and updates it with the result.

function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}


//clearScreen(): Clears the display by setting its value to an empty string.

function clearScreen() {
    document.getElementById('result').value = '';
}