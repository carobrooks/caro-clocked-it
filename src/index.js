function getPresentTimezone() {
  let currentTimeZoneId = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(currentTimeZoneId);

  let pastTimeZoneId = getPastTimezone(currentTimeZoneId);
  let futureTimeZoneId = getFutureTimezone(currentTimeZoneId);

  updatePastTime(pastTimeZoneId, true);
  updatePresentTime(currentTimeZoneId, true);
  updateFutureTime(futureTimeZoneId, true);

  setInterval(() => {
    updatePastTime(pastTimeZoneId);
    updatePresentTime(currentTimeZoneId);
    updateFutureTime(futureTimeZoneId);
  }, 1000);
}

getPresentTimezone();

function getPastTimezone(currentTimeZoneId) {
  let timezoneId;
  if (
    currentTimeZoneId.startsWith("America/New_York") ||
    currentTimeZoneId.startsWith("America/")
  ) {
    const options = [
      "America/Los_Angeles",
      "America/Anchorage",
      "Pacific/Honolulu",
      "America/Vancouver",
      "America/Tijuana",
      "America/Merida",
      "America/Juneau",
      "America/Guatemala",
      "Pacific/Tahiti",
    ];
    timezoneId = options[Math.floor(Math.random() * options.length)];
  } else if (currentTimeZoneId.startsWith("America/Chicago")) {
    const options = [
      "Pacific/Honolulu",
      "America/Los_Angeles",
      "America/Anchorage",
      "America/Vancouver",
      "America/Tijuana",
      "America/Juneau",
      "Pacific/Tahiti",
    ];
    timezoneId = options[Math.floor(Math.random() * options.length)];
  } else if (
    currentTimeZoneId.startsWith("America/Los_Angeles") ||
    currentTimeZoneId.startsWith("America/Denver")
  ) {
    const options = ["Pacific/Honolulu", "Pacific/Pago_Pago", "Pacific/Tahiti"];
    timezoneId = options[Math.floor(Math.random() * options.length)];
  } else if (currentTimeZoneId.startsWith("Europe/")) {
    const options = [
      "America/New_York",
      "America/Los_Angeles",
      "Pacific/Honolulu",
      "America/Los_Angeles",
      "America/Anchorage",
      "America/Vancouver",
      "America/Tijuana",
      "America/Chicago",
      "America/Mexico_City",
      "America/Sao_Paulo",
      "America/Louisville",
      "America/Indianapolis",
      "Pacific/Tahiti",
    ];
    timezoneId = options[Math.floor(Math.random() * options.length)];
  } else if (currentTimeZoneId.startsWith("Asia/")) {
    const options = [
      "America/New_York",
      "America/Los_Angeles",
      "Pacific/Honolulu",
      "America/Los_Angeles",
      "America/Anchorage",
      "America/Vancouver",
      "America/Tijuana",
      "America/Chicago",
      "America/Mexico_City",
      "America/Sao_Paulo",
      "America/Louisville",
      "America/Indianapolis",
      "Europe/Amsterdam",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Copenhagen",
      "Europe/Dublin",
      "Europe/London",
      "Europe/Madrid",
      "Europe/Moscow",
      "Europe/Oslo",
      "Europe/Paris",
      "Europe/Prague",
      "Europe/Rome",
      "Europe/Lisbon",
      "Europe/Istanbul",
      "Europe/Vienna",
      "Pacific/Tahiti",
    ];
    timezoneId = options[Math.floor(Math.random() * options.length)];
  } else {
    return "UTC";
  }
  return timezoneId;
}

function getFutureTimezone(currentTimeZoneId) {
  let timezoneId;
  if (currentTimeZoneId.startsWith("America/")) {
    const options = [
      "Asia/Bangkok",
      "Asia/Dubai",
      "Asia/Hong_Kong",
      "Asia/Istanbul",
      "Asia/Jakarta",
      "Asia/Jerusalem",
      "Asia/Tel_Aviv",
      "Asia/Tehran",
      "Asia/Tokyo",
      "Europe/Amsterdam",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Copenhagen",
      "Europe/Dublin",
      "Europe/London",
      "Europe/Madrid",
      "Europe/Moscow",
      "Europe/Oslo",
      "Europe/Paris",
      "Europe/Prague",
      "Europe/Rome",
      "Europe/Lisbon",
      "Europe/Istanbul",
      "Europe/Vienna",
    ];
    timezoneId = options[Math.floor(Math.random() * options.length)];
  } else if (currentTimeZoneId.startsWith("Europe/")) {
    const options = [
      "Asia/Bangkok",
      "Asia/Hong_Kong",
      "Asia/Jakarta",
      "Asia/Tokyo",
      "Asia/Shanghai",
      "Australia/Sydney",
      "Australia/Brisbane",
      "Australia/Melbourne",
      "Australia/Perth",
      "Australia/Victoria",
      "Australia/Adelaide",
    ];
    timezoneId = options[Math.floor(Math.random() * options.length)];
  } else if (currentTimeZoneId.startsWith("Asia/")) {
    const options = ["Pacific/Auckland", "Pacific/Samoa"];
    timezoneId = options[Math.floor(Math.random() * options.length)];
  } else {
    return "UTC";
  }
  return timezoneId;
}

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

function getPastPromptBasedOnTime(timeZone, cityName) {
  let hour = timeZone.hour();

  let earlyMorningPrompts = [
    `Someone just woke up in ${cityName}. Can you imagine what they might have seen as they opened their eyes?`,
    `Someone in ${cityName} has been struggling with depression recently. What new opportunities might be revealing themselves that give them hope?`,
    `There's a gentle light that only a new morning can bring. What might this look like in ${cityName}? How might it make someone feel as they start their day?`,
  ];

  let morningPrompts = [
    `A young man is waiting at a coffeeshop ${cityName} for a date. What might he be feeling as he sits with his drink in hand, opening himself up to a new experience?`,
    `Morning is in full swing in ${cityName}. How might a busy working mom be taking a moment to breathe?`,
    `A recent college grad in ${cityName} has a job interview today. How might they be preparing for it so that they feel confident?`,
  ];

  let noonPrompts = [
    `Someone in ${cityName} is on their lunch break. What kind of cuisine do you think they might be enjoying? How does it smell, taste? How does it make them feel?`,
    `Someone has been struggling with depression in ${cityName} lately. As the afternoon sun shines brightly, what hopes might be rising for them?`,
    `Someone in ${cityName} is taking a midday break. How might they be enjoying their time between their everyday responsibilities?`,
  ];

  let midAfternoonPrompts = [
    `Someone in ${cityName} is preparing to leave on a long international trip tomorrow. How might they find a moment to pause amidst the chaos of preparing to leave?`,
    `How might friends in ${cityName} be planning to spend their evening together?`,
    `A couple and their young child recently immigrated to ${cityName}. What might they be doing this afternoon to settle in and explore their new city? How might they be feeling?`,
  ];

  let eveningPrompts = [
    `A working mom in ${cityName} had a long, tiring day. Can you envision how she might be finding a moment to rest and recharge as the day comes to an end?`,
    `A single dad in ${cityName} is struggling to find time for himself. How might his friends and neighbors be helping him so he can have a restful evening?`,
    `A teenager in ${cityName} is planning on coming out to their parents after dinner. How might they be feeling as the meal wraps up?`,
  ];

  let nightPrompts = [
    `Someone in ${cityName} is putting final touches on a surprise birthday party for their sister. What details might they be thinking about?`,
    `Someone in ${cityName} is telling their loved ones a story under the starry sky. What might it be about?`,
    `Someone in ${cityName} is proposing marriage to their partner. What kind of setting might they be in? How might they both be feeling?`,
  ];

  let lateNightPrompts = [
    `Someone in ${cityName} is struggling to fall asleep after a stressful day. What ways might they find to soothe their worries and ease themselves into sleep?`,
    `A young couple just brought their first child home from the hospital in ${cityName}. What might they be thinking and feeling?`,
    `Someone in ${cityName} recently lost a loved one. How might they give space to their grief in the quiet hours of the night?`,
  ];

  let selectedPastPrompt = "";

  if (hour < 5) {
    selectedPastPrompt =
      lateNightPrompts[Math.floor(Math.random() * lateNightPrompts.length)];
  } else if (hour < 9) {
    selectedPastPrompt =
      earlyMorningPrompts[
        Math.floor(Math.random() * earlyMorningPrompts.length)
      ];
  } else if (hour < 12) {
    selectedPastPrompt =
      morningPrompts[Math.floor(Math.random() * morningPrompts.length)];
  } else if (hour < 14) {
    selectedPastPrompt =
      noonPrompts[Math.floor(Math.random() * noonPrompts.length)];
  } else if (hour < 18) {
    selectedPastPrompt =
      midAfternoonPrompts[
        Math.floor(Math.random() * midAfternoonPrompts.length)
      ];
  } else if (hour < 21) {
    selectedPastPrompt =
      eveningPrompts[Math.floor(Math.random() * eveningPrompts.length)];
  } else {
    selectedPastPrompt =
      nightPrompts[Math.floor(Math.random() * nightPrompts.length)];
  }

  return selectedPastPrompt;
}

function updatePastTime(pastTimeZoneId, updatePrompt = false) {
  console.log("Updating past time, timezone: ", pastTimeZoneId);
  let pastTimeElement = document.querySelector("#past-time");
  if (pastTimeElement) {
    let pastTimeZone = moment().tz(pastTimeZoneId);
    let pastDay = pastTimeZone.format("dddd");
    let pastTime = pastTimeZone.format("h:mm:ss A");
    console.log("Past TimeZone ID: ", pastTimeZoneId);
    let cityName = pastTimeZoneId.split("/")[1].replace("_", " ");

    let pastMessage = `It's currently ${pastTime} on ${pastDay} in ${cityName}.`;
    pastTimeElement.innerHTML = pastMessage;
    console.log("Past: " + pastMessage);

    if (updatePrompt) {
      let pastPrompt = getPastPromptBasedOnTime(pastTimeZone, cityName);
      let pastPromptElement = document.querySelector("#past-prompt");
      pastPromptElement.innerHTML = pastPrompt;
      console.log("Past Prompt: " + pastPrompt);
    }
  }
}

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
function getPresentPromptBasedOnTime(timeZone, cityName) {
  let hour = timeZone.hour();

  let earlyMorningPrompts = [
    `A child woke up with a low-grade fever this morning in ${cityName}. How do you think their parents are rearranging their morning to take care of their child?`,
    `A middle-aged woman is training for a marathon in ${cityName} and has her longest run yet this morning. What words of affirmation might she be telling herself as she prepares for her run?`,
    `A woman is starting a new job today in ${cityName}. What nerves might she be experiencing as she gets ready for her first day?`,
  ];

  let morningPrompts = [
    `A popular vegan bakery in ${cityName} is busier than usual this morning. How might a new employee be feeling as they navigate the constant demands of customers? How might they manage their stress?`,
    `A young man is stuck in traffic as an Uber driver in ${cityName}. What music might he be playing to help him get through his shift?`,
    `Someone in ${cityName} was just told their cancer is in remission. As the sun rises over the city, they wander to their favorite park. How might they be reflecting on the transient nature of life after receiving this news?`,
  ];

  let noonPrompts = [
    `A man is visiting childhood friends in ${cityName} for the first time. What sights might they be showing him?`,
    `A local fireman is retiring today in ${cityName}. How might he be feeling as he reflects back on his decades of service to his community?`,
    `Someone's flight just got cancelled from ${cityName} to their hometown. Who might they be calling to inform they'll be late? What might they be feeling?`,
  ];

  let midAfternoonPrompts = [
    `Someone in ${cityName} is celebrating 60 days sober. How might they be feeling as they reflect on their progress?`,
    `A young woman in ${cityName} is thinking of her mother who passed away 10 years ago today. What might she be feeling as she reflects on the passage of time and how it's shaped and supported her grief?`,
    `A young writer in ${cityName} is sitting in the coffee shop where she has been writing her first novel for the last year-and-a-half. She just finished her final draft. What might she be feeling as she reflects on all the time she's put into her craft to get to this point?`,
  ];

  let eveningPrompts = [
    `A surgeon just completed a successful 12-hour long procedure in ${cityName}. How might they be feeling as they reflect on all the years they've spent mastering their life-saving skill?`,
    `A high school senior in ${cityName} just read the letter of acceptance to their dream college. How might they be celebrating their hard work and potential future?`,
    `Someone in ${cityName} is celebrating their 90th birthday with their loved ones. What old songs might they be singing along to? How might they be feeling as they look around at the people surrounding them?`,
  ];

  let nightPrompts = [
    `A ${cityName} native recently moved back after years away. What might they be doing tonight to rekindle old friendships?`,
    `A young musician in ${cityName} has their first show tonight. What might they be feeling as they walk into the venue? Onto the stage?`,
    `A high school basketball team in ${cityName} won their first game of the season tonight. How might they be feeling as they reflect on the hard work they've put in over the last few months?`,
  ];

  let lateNightPrompts = [
    `A baker is opening up shop in ${cityName}. How might they be feeling as they prepare food for their community before dawn?`,
    `A young woman is struggling to sleep in ${cityName}. She's thinking about a hurtful comment she made to her best friend earlier in the day. How might she reflect on the situation so that she can fall asleep? What apology might she be crafting in her mind?`,
    `An emergency room nurse in ${cityName} is working her fourth 12-hour shift of the week. What words of encouragement might they be telling themselves to help make it through their shift?`,
  ];

  let selectedPresentPrompt = "";

  if (hour < 5) {
    selectedPresentPrompt =
      lateNightPrompts[Math.floor(Math.random() * lateNightPrompts.length)];
  } else if (hour < 9) {
    selectedPresentPrompt =
      earlyMorningPrompts[
        Math.floor(Math.random() * earlyMorningPrompts.length)
      ];
  } else if (hour < 12) {
    selectedPresentPrompt =
      morningPrompts[Math.floor(Math.random() * morningPrompts.length)];
  } else if (hour < 14) {
    selectedPresentPrompt =
      noonPrompts[Math.floor(Math.random() * noonPrompts.length)];
  } else if (hour < 18) {
    selectedPresentPrompt =
      midAfternoonPrompts[
        Math.floor(Math.random() * midAfternoonPrompts.length)
      ];
  } else if (hour < 21) {
    selectedPresentPrompt =
      eveningPrompts[Math.floor(Math.random() * eveningPrompts.length)];
  } else {
    selectedPresentPrompt =
      nightPrompts[Math.floor(Math.random() * nightPrompts.length)];
  }

  return selectedPresentPrompt;
}

function updatePresentTime(presentTimeZoneId, updatePrompt = false) {
  console.log("Updating present time, timezone: ", presentTimeZoneId);

  let presentTimeElement = document.querySelector("#present-time");
  if (presentTimeElement) {
    let presentTimeZone = moment().tz(presentTimeZoneId);
    let presentDay = presentTimeZone.format("dddd");
    let presentTime = presentTimeZone.format("h:mm:ss A");
    let cityName = presentTimeZoneId.split("/")[1].replace("_", " ");

    let presentMessage = `It's currently ${presentTime} on ${presentDay} where you are.`;
    presentTimeElement.innerHTML = presentMessage;
    console.log("Present: " + presentMessage);

    let actualTimeElement = document.querySelector("#actual-time");
    actualTimeElement.innerHTML = `${presentTime}`;

    if (updatePrompt) {
      let presentPrompt = getPresentPromptBasedOnTime(
        presentTimeZone,
        cityName
      );
      let presentPromptElement = document.querySelector("#present-prompt");
      presentPromptElement.innerHTML = presentPrompt;
      console.log("Present Prompt: " + presentPrompt);
    }
  }
}

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

function getFuturePromptBasedOnTime(timeZone, cityName) {
  let hour = timeZone.hour();

  let earlyMorningPrompts = [
    `What do you imagine the early morning scene in ${cityName} like, before people have settled into their routines?`,
    `What kind of morning hustle do you imagine is happening in ${cityName}?`,
    `What might someone's morning commute in ${cityName} like?`,
  ];

  let morningPrompts = [
    `As ${cityName} settles into a new day, how might someone take a moment to reflect on what matters most to them?`,
    `What might someone be contemplating as they take a mid-morning stroll in ${cityName}?`,
    `And just like that, early morning has become mid-morning, and soon it will be afternoon. What might someone in ${cityName} be doing to make the most of this transient moment in time?`,
  ];

  let noonPrompts = [
    `What kind of food in ${cityName} do you think someone might be enjoying for lunch?`,
    `What might the sound be like near a local school at lunchtime recess in ${cityName}? What about when students return to class?`,
    `What kind of exercise might someone be getting midday in ${cityName}?`,
  ];

  let midAfternoonPrompts = [
    `As the afternoon wanes in ${cityName}, what might someone ponder about the transient nature of the day?`,
    `How could the beauty of the late afternoon in ${cityName} inspire reflections on the beauty of impermanence?`,
    `What might the softening light of the late afternoon in ${cityName} teach us about the gentleness of acceptance?`,
  ];

  let eveningPrompts = [
    `What could the coming of night in ${cityName} teach us about the cycle of life and death?`,
    `In what ways might the evening starlight in ${cityName} provoke thoughts about the light that exists even in darkness?`,
    `As the temperatures cool down in ${cityName}, how might someone be reflecting on the changing seasons of their life?`,
  ];

  let nightPrompts = [
    `What might someone in ${cityName} be letting go of in order to fall asleep?`,
    `Can you envision someone in ${cityName} reading a book by a soft light as they wind down for bed?`,
    `How might someone in ${cityName} be winding down during these peaceful hours of the night?`,
  ];

  let lateNightPrompts = [
    `What worries might be keeping someone awake in the night in ${cityName}? What might they let go of to fall back asleep?`,
    `Can you imagine what a night owl might be up to in ${cityName}?`,
    `How might a new parent be caring for their baby at this late hour in ${cityName}?`,
  ];

  let selectedFuturePrompt = "";

  if (hour < 5) {
    selectedFuturePrompt =
      lateNightPrompts[Math.floor(Math.random() * lateNightPrompts.length)];
  } else if (hour < 9) {
    selectedFuturePrompt =
      earlyMorningPrompts[
        Math.floor(Math.random() * earlyMorningPrompts.length)
      ];
  } else if (hour < 12) {
    selectedFuturePrompt =
      morningPrompts[Math.floor(Math.random() * morningPrompts.length)];
  } else if (hour < 14) {
    selectedFuturePrompt =
      noonPrompts[Math.floor(Math.random() * noonPrompts.length)];
  } else if (hour < 18) {
    selectedFuturePrompt =
      midAfternoonPrompts[
        Math.floor(Math.random() * midAfternoonPrompts.length)
      ];
  } else if (hour < 21) {
    selectedFuturePrompt =
      eveningPrompts[Math.floor(Math.random() * eveningPrompts.length)];
  } else {
    selectedFuturePrompt =
      nightPrompts[Math.floor(Math.random() * nightPrompts.length)];
  }

  return selectedFuturePrompt;
}

function updateFutureTime(futureTimeZoneId, updatePrompt = false) {
  console.log("Updating future time, timezone: ", futureTimeZoneId);

  let futureTimeElement = document.querySelector("#future-time");
  if (futureTimeElement) {
    let futureTimeZone = moment().tz(futureTimeZoneId);
    let futureDay = futureTimeZone.format("dddd");
    let futureTime = futureTimeZone.format("h:mm:ss A");
    let cityName = futureTimeZoneId.split("/")[1].replace("_", " ");

    let futureMessage = `It's currently ${futureTime} on ${futureDay} in ${cityName}.`;
    futureTimeElement.innerHTML = futureMessage;
    console.log("Future: " + futureMessage);

    if (updatePrompt) {
      let futurePrompt = getFuturePromptBasedOnTime(futureTimeZone, cityName);
      let futurePromptElement = document.querySelector("#future-prompt");
      futurePromptElement.innerHTML = futurePrompt;
      console.log("Future Prompt: " + futurePrompt);
    }
  }
}

const app = document.getElementById("app");

const pages = {
  "past-page": document.getElementById("travel-back"),
  "present-page": document.getElementById("be-here-now"),
  "future-page": document.getElementById("imagine-the-future"),
};

function changePage(page) {
  console.log("Page DOM element:", pages[page]);
  console.log("Page value:", page);
  pages[page].scrollIntoView({ behavior: "smooth" });
}

document
  .getElementById("on-second-thought")
  .addEventListener("change", function () {
    console.log("Change event fired");
    changePage(this.value);
  });
