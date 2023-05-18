const buttons = document.getElementById("buttons");
const display = document.getElementById("display");
let inputArr = [];
let buttonPressed = "";
let number1 = "";
const maxLength = 10;
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operatorsArr = ["+", "-", "x", "/"];

buttons.addEventListener("click", (event) => {
  for (let number of numbersArr) {
    if (
      event.target.classList.contains(number) &&
      inputArr.length < maxLength
    ) {
      inputArr.push(number);
    }
  }

  if (event.target.classList.contains("00") && inputArr.length < maxLength) {
    inputArr.push("0", "0");
  }

  if (event.target.classList.contains("+/-")) {
    if (inputArr[0] != "-") {
      inputArr.unshift("-");
    } else if (inputArr[0] === "-") {
      inputArr.shift();
    }
  }

  display.innerText = inputArr.join("");

  for (let operator of operatorsArr) {
    if (event.target.classList.contains(operator)) {
      recordInput(event);
    }
  }

  if (event.target.classList.contains("=")) {
    calculation();
  }

  if (event.target.classList.contains("ac")) {
    inputArr = [];
    number1 = "";
    number2 = "";
    display.innerText = "0";

    console.log("num1:", number1, "num2:", number2, inputArr);
  }
});

function recordInput(event) {
  number1 = parseFloat(inputArr.join(""));
  buttonPressed = event.target.innerText;
  inputArr = [];
}

function calculation() {
  let answer;
  let number2 = parseFloat(inputArr.join(""));

  if (buttonPressed === "+") {
    answer = number1 + number2;
  } else if (buttonPressed === "-") {
    answer = number1 - number2;
  } else if (buttonPressed === "x") {
    answer = number1 * number2;
  } else if (buttonPressed === "/") {
    answer = number1 / number2;
  }

  answer.toString().length > 10 ? (answer = answer.toExponential(2)) : answer;
  display.innerText = answer;

  console.log(number1, number2, answer);
}

// TODO: 1: fix equal spam, 2: make % work
