let pastClickMe = document.getElementById("travel-back");
let pastText = document.getElementById("past-text");
let pastTimePrompt = document.querySelector(".past-time-prompt-container");

pastClickMe.addEventListener("click", function () {
  if (getComputedStyle(pastTimePrompt).display === "none") {
    pastTimePrompt.style.display = "flex";
    pastText.style.display = "none";
  } else {
    pastTimePrompt.style.display = "none";
    pastText.style.display = "block";
  }
});

function updatePastTime() {
  let pastTimeElement = document.querySelector("#past-time");
  if (pastTimeElement) {
    let pastTimeZone = moment().tz("Pacific/Honolulu");
    let pastDay = pastTimeZone.format("dddd");
    let pastTime = pastTimeZone.format("h:mm:ss A");

    pastTimeElement.innerHTML = `It's currently ${pastTime} on ${pastDay} in Honolulu.`;
  }
}

updatePastTime();
setInterval(updatePastTime, 1000);

let presentClickMe = document.getElementById("be-here-now");
let presentText = document.getElementById("present-text");
let presentTimePrompt = document.querySelector(
  ".present-time-prompt-container"
);

presentClickMe.addEventListener("click", function () {
  if (getComputedStyle(presentTimePrompt).display === "none") {
    presentTimePrompt.style.display = "flex";
    presentText.style.display = "none";
  } else {
    presentTimePrompt.style.display = "none";
    presentText.style.display = "block";
  }
});

function updatePresentTime() {
  let presentTimeElement = document.querySelector("#present-time");
  if (presentTimeElement) {
    let presentTimeZone = moment().tz("America/Los_Angeles");
    let presentDay = presentTimeZone.format("dddd");
    let presentTime = presentTimeZone.format("h:mm:ss A");

    presentTimeElement.innerHTML = `It's currently ${presentTime} on ${presentDay} in Los Angeles.`;
  }
}

updatePresentTime();
setInterval(updatePresentTime, 1000);

let futureClickMe = document.getElementById("imagine-the-future");
let futureText = document.getElementById("future-text");
let futureTimePrompt = document.querySelector(".future-time-prompt-container");

futureClickMe.addEventListener("click", function () {
  if (getComputedStyle(futureTimePrompt).display === "none") {
    futureTimePrompt.style.display = "flex";
    futureText.style.display = "none";
  } else {
    futureTimePrompt.style.display = "none";
    futureText.style.display = "block";
  }
});

function updateFutureTime() {
  let futureTimeElement = document.querySelector("#future-time");
  if (futureTimeElement) {
    let futureTimeZone = moment().tz("Australia/Sydney");
    let futureDay = futureTimeZone.format("dddd");
    let futureTime = futureTimeZone.format("h:mm:ss A");

    futureTimeElement.innerHTML = `It's currently ${futureTime} on ${futureDay} in Sydney.`;
  }
}

updateFutureTime();
setInterval(updateFutureTime, 1000);
