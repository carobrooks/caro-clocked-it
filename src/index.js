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
    currentTimeZoneId.startsWith("America/Detroit")
  ) {
    const options = [
      "America/Los_Angeles",
      "America/Anchorage",
      "Pacific/Honolulu",
      "America/Vancouver",
      "America/Tijuana",
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
    currentTimeZoneId.startsWith("America/Denver") ||
    currentTimeZoneId.startsWith("America/Phoenix")
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

let pastClickMe = document.getElementById("past-click-me");
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

pastTimePrompt.addEventListener("click", function () {
  if (getComputedStyle(pastText).display === "none") {
    pastText.style.display = "block";
    pastTimePrompt.style.display = "none";
  } else {
    pastText.style.display = "none";
    pastTimePrompt.style.display = "flex";
  }
});

function getPastPromptBasedOnTime(timeZone, cityName) {
  let hour = timeZone.hour();

  let earlyMorningPrompts = [
    `A nightshift worker in ${cityName} is heading home after a long workday. What thoughts might be crossing their mind as they prepare for sleep while the rest of the world awakens?`,
    `A teenage boy in ${cityName} is dreading going to school this morning because he fears he'll be bullied again. How might he communicate his feelings so that he can find support?`,
    `A new mom in ${cityName} is up early after a sleepless night. As she rocks her newborn back to sleep, she watches the sunrise. How might she be feeling in this quiet, early hour? What hopes might she have for her child's future?`,
  ];

  let morningPrompts = [
    `A young man is waiting at a coffeeshop in ${cityName} for a date. What might he be feeling as he sits with his drink in hand, opening himself up to a new experience?`,
    `Morning is in full swing in ${cityName}. How might a busy working mom be taking a moment to breathe?`,
    `A recent computer science grad in ${cityName} has a technical job interview this morning. What might they be thinking about as they prepare for it? How might they be feeling?`,
  ];

  let noonPrompts = [
    `A construction worker in ${cityName} is on their lunch break. What kind of food do you think they might be enjoying? How does it smell, taste? How does it make them feel?`,
    `A middle-aged man in ${cityName} has been struggling with depression since he was laid off a few weeks ago. As the sun poked through the clouds this morning, he realized he needs help. Who might he reach out to for support this afternoon?`,
    `A tenant lawyer in ${cityName} is taking a midday break. How might they be enjoying their time between their everyday responsibilities?`,
  ];

  let midAfternoonPrompts = [
    `A young couple in ${cityName} is preparing to leave on their first international trip tomorrow. How might they find a moment to pause this afternoon amidst the chaos of preparing to leave?`,
    `Two old college friends in ${cityName} haven't seen each other in a few years, and are texting about getting together tonight. How might they choose to spend their first evening back together?`,
    `A couple and their young child recently immigrated to ${cityName}. What might they be doing this afternoon to settle in and explore their new city? How might they be feeling?`,
  ];

  let eveningPrompts = [
    `A working mom in ${cityName} had a long, tiring day. Can you envision how she might be finding a moment to rest and recharge as the day comes to an end?`,
    `A single dad in ${cityName} is struggling to find time for himself. How might his friends and neighbors be helping him so he can have a restful evening?`,
    `A teenager in ${cityName} is planning on coming out to their parents after dinner. How might they be feeling as the meal wraps up?`,
  ];

  let nightPrompts = [
    `A 27-year-old woman in ${cityName} is welcoming guests to her sister's surprise birthday party. How might she be feeling as she waits for her sister to arrive?`,
    `A grandmother is telling her loved ones the story of how she immigrated to ${cityName} under the starry sky. What might the atmosphere be like as everyone listens attentively?`,
    `A 30-year-old man in ${cityName} is proposing marriage to their partner. What kind of setting might they be in? How might they both be feeling?`,
  ];

  let lateNightPrompts = [
    `A teenage boy in ${cityName} is struggling to fall asleep after a hard day at school. What ways might he find to soothe his worries and ease himself into sleep?`,
    `A young couple just brought their first child home from the hospital in ${cityName}. What might they be thinking and feeling as they settle in?`,
    `A young woman in ${cityName} recently lost her mother. How might she be giving space to her grief in the quiet hours of the night?`,
  ];

  let selectedPastPrompt = "";
  console.log(hour);

  if (hour < 5) {
    selectedPastPrompt =
      lateNightPrompts[Math.floor(Math.random() * lateNightPrompts.length)];
  } else if (hour < 8) {
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

  console.log(selectedPastPrompt);
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

    let pastMessage = `It's currently <span id="actual-past-time">${pastTime}</span> on ${pastDay} in ${cityName}.`;
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

let presentClickMe = document.getElementById("present-click-me");
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

presentTimePrompt.addEventListener("click", function () {
  if (getComputedStyle(presentText).display === "none") {
    presentText.style.display = "block";
    presentTimePrompt.style.display = "none";
  } else {
    presentText.style.display = "none";
    presentTimePrompt.style.display = "flex";
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
    `A middle-aged woman in ${cityName} was just told her breast cancer is in remission. As the sun rises over the city, she wanders to her favorite park. How might she be reflecting on the transient nature of life after receiving this news?`,
  ];

  let noonPrompts = [
    `A man is visiting childhood friends in ${cityName} for the first time. What sights might they be showing him?`,
    `A local fireman is retiring today in ${cityName}. How might he be feeling as he reflects back on his decades of service to his community?`,
    `A father of three girls has been in ${cityName} on a 10-day business trip. He just arrived to the airport to find his return flight got cancelled. Who might he be calling to inform he'll be late? How might he, and those back home, be feeling?`,
  ];

  let midAfternoonPrompts = [
    `A middle-aged man in ${cityName} is celebrating 60 days sober today. How might he be feeling as he reflects on his progress?`,
    `An eldery woman in ${cityName} is thinking of her mother who passed away when she was only 14 years old. What might she be feeling as she reflects on the passage of time and how it's shaped and supported her through her grief?`,
    `A young writer in ${cityName} is sitting in the coffee shop where she has been writing her first novel for the last year-and-a-half. She just finished her final draft. What might she be feeling as she reflects on all the time she's put into her craft to get to this point?`,
  ];

  let eveningPrompts = [
    `A surgeon just completed a successful 12-hour long procedure in ${cityName}. How might they be feeling as they reflect on all the years they've spent mastering their life-saving skill?`,
    `A high school senior in ${cityName} just read the letter of acceptance to their dream college. How might they be celebrating their hard work and potential future?`,
    `An elderly man in ${cityName} is celebrating his 90th birthday with his loved ones. What old songs might he be singing along to? How might he be feeling as he looks around at the people surrounding him?`,
  ];

  let nightPrompts = [
    `A ${cityName} native recently moved back after years away. What might they be doing tonight to rekindle old friendships?`,
    `A young musician in ${cityName} has her first show tonight. What might she be feeling as she walks into the venue? Onto the stage?`,
    `A high school basketball team in ${cityName} won their first game of the season tonight. How might they be feeling as they reflect on the hard work they've put in over the last few months?`,
  ];

  let lateNightPrompts = [
    `A baker is opening up shop in ${cityName}. How might they be feeling as they prepare food for their community before dawn?`,
    `A middle-aged woman is struggling to sleep in ${cityName}. She's thinking about a hurtful comment she made to her daughter earlier in the day. How might she reflect on the situation so that she can fall asleep? What apology might she be crafting in her mind?`,
    `An emergency room nurse in ${cityName} is working her fourth 12-hour shift of the week. What words of encouragement might she be telling herself to help make it through her shift?`,
  ];

  let selectedPresentPrompt = "";

  if (hour < 5) {
    selectedPresentPrompt =
      lateNightPrompts[Math.floor(Math.random() * lateNightPrompts.length)];
  } else if (hour < 8) {
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

  console.log(selectedPresentPrompt);
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

    let presentMessage = `It's currently <span id="actual-present-time">${presentTime}</span> on ${presentDay} where you are.`;
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

let futureClickMe = document.getElementById("future-click-me");
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

futureTimePrompt.addEventListener("click", function () {
  if (getComputedStyle(futureText).display === "none") {
    futureText.style.display = "block";
    futureTimePrompt.style.display = "none";
  } else {
    futureText.style.display = "none";
    futureTimePrompt.style.display = "flex";
  }
});

function getFuturePromptBasedOnTime(timeZone, cityName) {
  let hour = timeZone.hour();

  let earlyMorningPrompts = [
    `A young woman is teaching her first yoga class in ${cityName} this morning. How might she feel as she welcomes her first student?`,
    `A small business owner in ${cityName} has just opened the doors to their dream bakery. As the first customers trickle in, what might they be feeling? What hopes do they have for their new venture?`,
    `A single parent in ${cityName} is making breakfast while helping their kids get ready for school. How might they be feeling as they manage these morning tasks?`,
  ];

  let morningPrompts = [
    `A mother and her child just planted some carrots in ${cityName}. What do you imagine the tone of the mother's voice was like as she helped her child drop the seeds? How do you think the child felt afterwards?`,
    `A 36-year-old woman in ${cityName} is learning web development after spending her young adult life as an actress. She's getting frustrated working on a problem. How might she take a break to reset and clear her mind?`,
    `A young man in ${cityName} is stuck in traffic on his way to an important meeting. What music might he be listening to in his car to help him stay calm and focused?`,
  ];

  let noonPrompts = [
    `A vegan restaurant just opened up in ${cityName} and has lines around the corner every day. Now the owner is nervously awaiting a food critic's review. How might she be feeling as she prepares for the lunchtime rush?`,
    `A woman in her 50s just crossed the finish line of her first half marathon in ${cityName}. How might she be feeling as she cools down and celebrates her achievement?`,
    `It's lunchtime recess at an elementary school in ${cityName}. How might it sound as the children play? How might the sounds change as the students return to class?`,
  ];

  let midAfternoonPrompts = [
    `A young couple in ${cityName} is trying to fix a leaking pipe in their new home. How might they be working together to solve this unexpected problem?`,
    `A teenage girl in ${cityName} is nervously preparing for her driving test. How might she calm her nerves and focus on the road?`,
    `A retired teacher in ${cityName} is volunteering at a local library's story hour. What book might she be reading to the children, and why?`,
  ];

  let eveningPrompts = [
    `A young graduate in ${cityName} is stepping into their first apartment alone. How might they be feeling as they look around at their new space?`,
    `A teenage girl in ${cityName} is giving her first speech at a climate change rally. How might she be feeling before stepping up to the podium? How might she feel after her speech?`,
    `A family in ${cityName} is having a reunion after years of living apart. What stories might they be sharing over a home-cooked meal?`,
  ];

  let nightPrompts = [
    `A talented painter in ${cityName} has been struggling to make ends meet for the last seven years. Tonight, they're displaying their work at a gallery for the first time. What emotions might they be experiencing as visitors begin to arrive?`,
    `An elderly man in ${cityName} is baking his late wife's favorite cookies for the first time. How might he be feeling as he mixes the dough?`,
    `A street musician in ${cityName} is setting up their instruments for the night. How might they be feeling as they prepare to perform? What songs might they decide to sing?`,
  ];

  let lateNightPrompts = [
    `A mother of four young children is struggling to sleep right now in ${cityName}. What worries might be keeping her up? What might she let go of to fall back asleep?`,
    `A young couple in ${cityName} who just moved in together had their first fight earlier in the evening, and now they're struggling to fall asleep. How might they communicate their feelings so that they can repair their connection and get some rest?`,
    `A new parent in ${cityName} was just awoken by their crying baby. How might they be feeling as they soothe their baby?`,
  ];

  let selectedFuturePrompt = "";

  if (hour < 5) {
    selectedFuturePrompt =
      lateNightPrompts[Math.floor(Math.random() * lateNightPrompts.length)];
  } else if (hour < 8) {
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

  console.log(selectedFuturePrompt);
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

    let futureMessage = `It's currently <span id="actual-future-time">${futureTime}</span> on ${futureDay} in ${cityName}.`;
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
