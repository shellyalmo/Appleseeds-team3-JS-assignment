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