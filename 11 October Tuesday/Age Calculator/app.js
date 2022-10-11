// Want to find out how old you'll be? Calculate it!
// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.

const birthYear = 1984;
const birthMonth = 4;
let futureYear = 2055;
let futureMonth = 5;
let ageBeforeBirthday = futureYear - birthYear - 1;
let ageAfterBirthday = futureYear - birthYear;

if (futureMonth < birthMonth) {
  document.write("I will be " + ageBeforeBirthday + " in " + futureYear);
} else {
  document.write("I will be " + ageAfterBirthday + " in " + futureYear);
}


