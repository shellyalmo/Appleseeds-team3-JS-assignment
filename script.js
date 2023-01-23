const operatorVar = prompt("Enter the operator that you want to use");

const operand1 = prompt("Enter the First Value");
if (isDigit(operand1) == false) {
  alert("Wrong input at operand 1| Not an integer Value");
}
const operand2 = prompt("Enter the Second Value");
if (isDigit(operand2) == false) {
  alert("Wrong input at operand 2| Not an integer Value");
}

var result;
switch (operatorVar) {
  case "*":
    result = operand1 * operand2;
    break;
  case "/":
    result = operand1 / operand2;
    break;
  case "+":
    result = parseInt(operand1) + parseInt(operand2);
    break;
  case "-":
    result = operand1 - operand2;
    break;
  case "%":
    result = operand1 % operand2;
      
  default:
    alert("Invalid Operator!");
    break;
}

alert("The result is : " + result);

function isDigit(input) {
  var integer = true;
  for (var char of input) {
    if (char  `9`) {
      integer = false;
    }
  }
  return integer;
}
let twoOperators = function (num, operator) {
  if (operator === "sqrt") {
    return Math.sqrt(num);
  } else if (operator === "*") {
    return num * num;
  }
};
console.log(twoOperators(25, "sqrt"));
// function that determines how many parameters we get from the user according to the input
function ArgumentsFromUserCounter(userInputArray) {
  let numOfArgumentsFromUser = 0;
  if (userInputArray.length === 3) {
    numOfArgumentsFromUser = 3;
  } else if (userInputArray.length === 2) {
    numOfArgumentsFromUser = 2;
  }
  return numOfArgumentsFromUser;
}
console.log(ArgumentsFromUserCounter([4, "+", 5]));
console.log(ArgumentsFromUserCounter([4, "square"]));
