let fruit = "Apple";
let city = "Lausanne";
let country = "Switzerland";

let header = document.getElementsByTagName("h1")[0];
for (let index = 0; index < 2; index++) {
  header.innerHTML += fruit + (index + 1) + "<br>";
}

let paragraph = document.getElementsByTagName("p")[0];
for (let index = 0; index < 4; index++) {
  paragraph.innerHTML += (index + 1) + city + "<br>";
}

anchor.innerHTML = country;
for (let index = 0; index < 7; index++) {
  anchor.innerHTML += index + 1 + "<br>";
}
