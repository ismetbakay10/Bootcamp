// Define 2 numbers
// Find which one is smaller
// Create a loop starting by smaller one
// If both numbers are divisible by index finish the program and show the result


let number1 = 18;
let number2 = 12;

if (number1 < number2) {
  for (let index = number1; index > 0; index--) {
    if (number1 % index == 0 && number2 % index == 0) {
      let result = index;
      console.log(result);
      break;
    }
  }
} else {
  for (let index = number2; index > 1; index--) {
    if (number1 % index == 0 && number2 % index == 0) {
      let result = index;
      console.log(result);
      break;
    }
  }
}
