// For each single day of the week log the translated output
// e.g. if it is Monday, log "Montag" and so on
// Choose any language you like
// Try different ways: is it possible with if or switch?

let currentDay = prompt("Which day is it today?")

switch (currentDay) {
  case "Monday" : {
    alert("In french: C'est Lundi!")
    break;
  }
  case "Tuesday": {
    alert("In french: C'est Mardi!")
    break;
  }
  case "Wednesday": {
    alert("In french: C'est Mercredi!")
    break;
  }
  case "Thursday": {
    alert("In french: C'est Jeudi!")
    break;
  }
  case "Friday": {
    alert("In french: C'est Vendredi!")
    break;
  }
  case "Saturday": {
    alert("In french: C'est Samedi!")
    break;
  }
  case "Sunday": {
    alert("In french: C'est Dimanche!")
    break;
  }
  default: {
alert("Please type a valid day!")
  }
}