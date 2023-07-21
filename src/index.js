// First, get references to the elements that will be clicked and toggled
let pastClickMe = document.getElementById("travel-back");
let pastText = document.getElementById("past-text");
let pastTimePrompt = document.querySelector(".past-time-prompt-container");

// Add the click event listener
pastClickMe.addEventListener("click", function () {
  // Check if the past-time-prompt-container is displayed or not
  if (getComputedStyle(pastTimePrompt).display === "none") {
    // If it's not displayed, then show it and hide the past text
    pastTimePrompt.style.display = "flex";
    pastText.style.display = "none";
  } else {
    // If it's displayed, then hide it and show the past text
    pastTimePrompt.style.display = "none";
    pastText.style.display = "block";
  }
});

function updatePastTime() {
  let pastTimeElement = document.querySelector("#past-time");
  if (pastTimeElement) {
    let pastTimeZone = moment().tz("Pacific/Honolulu");
    let pastDay = pastTimeZone.format("dddd");
    let pastTime = pastTimeZone.format("hh:mm:ss A");

    pastTimeElement.innerHTML = `It's currently ${pastTime} on ${pastDay} in Honolulu.`;
  }
}

updatePastTime();
setInterval(updatePastTime, 1000);
