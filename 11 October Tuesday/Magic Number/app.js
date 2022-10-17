// while
// for
// for each

// let team = ["Linus", "Hélène", "Christina", "Hany"];

let magicNumber = Math.floor(Math.random() * 100);
console.log(magicNumber)

let guess = prompt("Guess the magic number");

while (guess != magicNumber) {
  if (guess > magicNumber) {
    alert("It is smaller");
  }
  if (guess < magicNumber) {
    alert("It is bigger");
  }
  //  let guess = prompt("Try again!");
}

alert("Bravo you found it");