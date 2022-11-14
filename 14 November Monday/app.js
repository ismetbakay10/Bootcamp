// The data/time we want to countdown to
// document.getElementById("mins").innerHTML = "new Date().getMinutes()";
// document.getElementById("secs").innerHTML = "new Date().getSeconds()";
let countDownDate = new Date("Nov 15, 2022 17:00:00").getTime();
console.log(countDownDate);

// Run myfunc every second
let myfunc = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  //   let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  //   let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  //   document.getElementById("days").innerHTML = days + "d ";
  //   document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("mins").innerHTML = minutes + " : ";
  document.getElementById("secs").innerHTML = seconds;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    // document.getElementById("days").innerHTML = "";
    // document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 500);



let deadLine = document.getElementById("deadLine");

function addSeconds(numOfSeconds, date = new Date()) {
  date.setSeconds(date.getSeconds() + numOfSeconds);
  countDownDate = date;
  deadLine.innerHTML = `Be Back At ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  return date;
}

function addMinutes(numOfMinutes, date = new Date()) {
  date.setMinutes(date.getMinutes() + numOfMinutes);
  countDownDate = date;
  deadLine.innerHTML = `Be Back At ${date.getHours()} : ${date.getMinutes()}`;
  return date;
}

let inputArea = document.getElementById("manuel");
function input(event){
 inputArea = event.target;
 console.log(inputArea.value);
 addMinutes(inputArea.value);
 inputArea.value="";

}
