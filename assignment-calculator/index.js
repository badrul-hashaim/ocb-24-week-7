var curentNumber = "";
var prevNumber = "";
var currentOperation = "0";
var answer = 0;
var clickHistory = "";

var arrayNumber = document.querySelectorAll(".key");
arrayNumber.forEach(element => {
    element.addEventListener("click", () => {
        keyFilter(element.value);
    })
});

document.addEventListener("keyup", (e) => {
    keyFilter(e.key);
})

function keyFilter(key) {
    clickHistory += key;
    console.log(clickHistory);
    switch (key) {
        case "1": 
        case "2":
        case "3": 
        case "4": 
        case "5": 
        case "6":
        case "7":
        case "8": 
        case "9":
        case "0":
        case ".": 
            clickNumber(key);
            break;
        case "+": 
        case "-":
        case "/": 
        case "X":
            clickOperation(key);
            break;
        case "*":
            clickOperation("X");
            break;
        case "Enter":
        case "=":
            clickSubmit();
            break;
        case "Delete":
        case "Del":
        case "Escape":
            reset();
            break;
        default:
            alert("Invalid key!")
            reset();
            break;
    }
}

function clickNumber(click) {
    curentNumber += click;
    displayNumber(curentNumber);
}

function clickOperation(click) {
    prevNumber = curentNumber;
    curentNumber = "";
    currentOperation = click;
}

function clickSubmit() {
    curentNumber = calculate(prevNumber, curentNumber, currentOperation);
    prevNumber = "";
    currentOperation = "0";
}

function displayNumber(number) {
    let toDisplay = document.getElementById("display");
    toDisplay.value = number;
}

function reset() {
    curentNumber = "";
    prevNumber = "";
    currentOperation = "0";
    answer = 0;
    clickHistory = "";
    displayNumber("0");
}

function calculate(number1, number2, operation) {
    switch (operation) {
        case "+":
            answer = Number(number1) + Number(number2);
            break;
        case "-":
            answer = Number(number1) - Number(number2);
            break;
        case "X":
            answer = Number(number1) * Number(number2);
            break;
        case "/":
            answer = Number(number1) / Number(number2);
            break;
        default:
            break;
    }
    displayNumber(answer);
    return answer;
}