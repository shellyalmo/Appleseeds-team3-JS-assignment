let twoOperators = function (num, operator) {
  if (operator === "sqrt") {
    return Math.sqrt(num);
  } else if (operator === "*") {
    return num * num;
  }
};
console.log(twoOperators(25, "sqrt"));
