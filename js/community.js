// ------------------------------------------------------------------------ VARIABLES
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private
function init() {
  injectMarquees();
  prettify();
}

function prettify() {
  let link_pic = document.getElementById("LinktreePic")
  link_pic.addEventListener('mouseenter', () => {
    link_pic.style.filter = 'brightness(1.5)';
  });
  link_pic.addEventListener('mousedown', () => {
    link_pic.style.filter = 'brightness(0.7)';
  });
  link_pic.addEventListener('mouseleave', () => {
    link_pic.style.filter = 'brightness(1)';
  });
  
  let guest_pic = document.getElementById("GuestbookPic")
  guest_pic.addEventListener('mouseenter', () => {
    guest_pic.style.transform = 'rotate(10deg)';
  });
  guest_pic.addEventListener('mouseleave', () => {
    guest_pic.style.transform = 'rotate(0deg)';
  });
  
  let seed_pic = document.getElementById("SeedboxPic")
  seed_pic.addEventListener('mouseenter', () => {
    seed_pic.style.transform = 'rotate(-20deg)';
  });
  seed_pic.addEventListener('mouseleave', () => {
    seed_pic.style.transform = 'rotate(-10deg)';
  });
}

async function injectMarquees() {
  let marquees = await getJSON("/json/community.json");
  document.getElementById("Markey").innerHTML=marquees[Math.floor(Math.random()*marquees.length)].quote;
}

function unhideMarquees()
{
  document.getElementById("Markey").style.display = "initial";
}

// ---------------------------------------------- utility
// ------------------------------------------------------------------------ LISTENERS
window.addEventListener("load", unhideMarquees);
// ------------------------------------------------------------------------ RUNNERS
pageInit();
init();