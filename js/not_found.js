// ------------------------------------------------------------------------ VARIABLES
let LEFT_EYE = document.getElementById("LeftEye");
let RIGHT_EYE = document.getElementById("RightEye");

// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- private
async function blink() {
  await delay(Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000);
  
  LEFT_EYE.style.filter = 'brightness(0)';
  RIGHT_EYE.style.filter = 'brightness(0)';
  await delay(100);
  LEFT_EYE.style.filter = 'brightness(1)';
  RIGHT_EYE.style.filter = 'brightness(1)';
}

// ---------------------------------------------- utility
const delay = millis => new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), millis)
});

// ---------------------------------------------- public
// ------------------------------------------------------------------------ LISTENERS
// ------------------------------------------------------------------------ RUNNERS
pageInit();
setInterval(blink, 1000);