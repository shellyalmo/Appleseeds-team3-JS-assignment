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
