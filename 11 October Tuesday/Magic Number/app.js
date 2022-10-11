// while
// for
// for each

// let team = ["Linus", "Hélène", "Christina", "Hany"];

let magicNumber = Math.floor(Math.random() * 100);
console.log(magicNumber)

let guess = prompt("Guess the magic number");
if (guess == magicNumber) {
  alert("Congrutlations!");
}
if (guess < magicNumber) {
    prompt("Please bigger")
}
else {
    prompt("Please smaller");
}
