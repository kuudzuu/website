// ------------------------------------------------------------------------ VARIABLES
let ORIENTATION = "Origin";
let CURR_PAGE = "Title";
let ON_404 = false;
let TIME = 0;
FIRST_LOAD = true;

let iframe = document.getElementById('iframe');
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- private
function init() {
  scrolled(0);
  adjustSize();
  deactivateArrows();
}

// -------------------- Nav clicks
function adjustSize() {
// Adjusts navbar and page called depending on orientation
  if (window.innerHeight > window.innerWidth && ORIENTATION !== "Portrait") {
    document.getElementById("Navbar").style.height = "50px";
    ORIENTATION = "Portrait";
    updateSource(CURR_PAGE);
  } else if (window.innerHeight <= window.innerWidth && ORIENTATION !== "Landscape") {
    document.getElementById("Navbar").style.height = "135px";
    ORIENTATION = "Landscape";
    updateSource(CURR_PAGE);
  }
}

async function navClick(source) {
  setAllBlack();
  if (source != CURR_PAGE) {
    await startTransition(); 
    TIME = Date.now();
  }
  CURR_PAGE = source;
  updateSource(source);
}

function updateSource(source){
  box_shadow = "-1px -3px 0 2px #000 inset, -2px -4px 0 3px rgba(0, 0, 0, 0.5) inset, 1px 0px 0 1px rgba(255, 255, 255, 0.75) inset, 2px 1px 0 2px rgba(255, 255, 255, 0.3) inset";
  background_color = "rgba(255, 255, 255, 0.2)";
  
  src = "";
  
  scrolled(0);
  switch (source) {
    case "Title":
      src=(ORIENTATION === "Landscape" ? "/title_down.html": "/title_up.html");
      document.getElementById("Title").innerHTML = "Invasive Website";
      document.getElementById('Navbar').style.backgroundImage = "url(\"/img/nav/nav_magenta.png\")";
      document.getElementById("HomePic").style.backgroundColor = background_color;
      document.getElementById("HomePic").style.boxShadow = box_shadow;
      deactivateArrows();
      break;
    case "Art":
      src=(ORIENTATION === "Landscape" ? "/art_down.html": "/art_up.html");
      document.getElementById("Title").innerHTML = "Invasive Artworks";
      document.getElementById('Navbar').style.backgroundImage = "url(\"/img/nav/nav_purple.png\")";
      document.getElementById("ArtPic").style.backgroundColor = background_color;
      document.getElementById("ArtPic").style.boxShadow = box_shadow;
      activateArrow("ArrowDown");
      break;
    case "Community":
      src=(ORIENTATION === "Landscape" ? "/community_down.html": "/community_up.html");
      document.getElementById("Title").innerHTML = "Invasive Community";
      document.getElementById('Navbar').style.backgroundImage = "url(\"/img/nav/nav_cyan.png\")";
      document.getElementById("CommunityPic").style.backgroundColor = background_color;
      document.getElementById("CommunityPic").style.boxShadow = box_shadow;
      activateArrow("ArrowDown");
      break;
    case "Writing":
      src=(ORIENTATION === "Landscape" ? "/writing_down.html": "/writing_up.html");
      document.getElementById("Title").innerHTML = "Invasive Writing";
      document.getElementById('Navbar').style.backgroundImage = "url(\"/img/nav/nav_blue.png\")";
      document.getElementById("WritingPic").style.backgroundColor = background_color;
      document.getElementById("WritingPic").style.boxShadow = box_shadow;
      deactivateArrows();
      break;
    case "Thoughts":
      src=(ORIENTATION === "Landscape" ? "/thoughts_down.html": "/thoughts_up.html");
      document.getElementById("Title").innerHTML = "Invasive Thoughts";
      document.getElementById("Navbar").style.backgroundImage = "url('img/nav/nav_yellow.png')";
      document.getElementById("ThoughtsPic").style.backgroundColor = background_color;
      document.getElementById("ThoughtsPic").style.boxShadow = box_shadow;
      activateArrow("ArrowDown");
      break;
    case "Accretion":
      src=(ORIENTATION === "Landscape" ? "/accretion_down.html": "/accretion_up.html");
      document.getElementById("Title").innerHTML = "Invasive Accretion";
      document.getElementById('Navbar').style.backgroundImage = "url(\"/img/nav/nav_coral.png\")";
      document.getElementById("AccretionPic").style.backgroundColor = background_color;
      document.getElementById("AccretionPic").style.boxShadow = box_shadow;
      deactivateArrows();
      break;
    case "Runoff":
      src=(ORIENTATION === "Landscape" ? "/runoff_down.html": "/runoff_up.html");
      document.getElementById("Title").innerHTML = "Invasive Runoff";
      document.getElementById('Navbar').style.backgroundImage = "url(\"/img/nav/nav_orange.png\")";
      document.getElementById("RunoffPic").style.backgroundColor = background_color;
      document.getElementById("RunoffPic").style.boxShadow = box_shadow;
      activateArrow("ArrowDown");
      break;
    default: 
      src="/not_found.html";
      document.getElementById("Title").innerHTML = "Missing";
      missing = true;
      endTransition();
      break;
  }
  
  iframe.src = src;
  
}

// -------------------- Transitionary gif
async function startTransition() {
  document.getElementById("Blink1").style.display = "inline";
  reloadBlink(1);
  await delay(500); 
  document.getElementById("TransitionBG").style.display = "inline";
  document.getElementById("Transition").style.display = "inline";
  animateTransition();
}

async function animateTransition() {
  document.getElementById("Transition").animate(
    [
      // keyframes
      { transform: "translateY(0px)" },
      { transform: "translateY(15px)" },
    ],
    {
      // timing options
      duration: 1500,
      iterations: 1,
      easing: "ease-in-out",
      composite: "add",
    }
  );
  await delay(200);
  document.getElementById("Transition").animate(
    [
      // keyframes
      { transform: "translateX(0px)" },
      { transform: "translateX(-20px)" },
      { transform: "translateX(0px)" },
    ],
    {
      // timing options
      duration: 1500,
      iterations: 1,
      easing: "ease-in-out",
      composite: "add",
    }
  );
}

async function endTransition() {
  if (!FIRST_LOAD) {
    while ((Date.now() - TIME) <= 500) {
      await delay(100); 
    }
    reloadBlink(2);
    await delay(500); 
    document.getElementById("TransitionBG").style.display = "none";
    document.getElementById("Transition").style.display = "none";
    await delay(200); 
    document.getElementById("Blink2").style.display = "none";
  } else {
   FIRST_LOAD = false; 
  }
}

function reloadBlink(num) {
  let blink = document.getElementById("Blink" + num.toString());
  let src = blink.src.split('?')[0];
  blink.src = '';
  blink.src = `${src}?t=${Date.now()}`;
  blink.style.display = "inline";
}

// -------------------- Navbar update
function setAllBlack() {
  document.getElementById("HomePic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("HomePic").style.boxShadow = ``;
  
  document.getElementById("ArtPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("ArtPic").style.boxShadow = ``;
  
  document.getElementById("CommunityPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("CommunityPic").style.boxShadow = ``;
  
  document.getElementById("WritingPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("WritingPic").style.boxShadow = ``;
  
  document.getElementById("ThoughtsPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("ThoughtsPic").style.boxShadow = ``;
  
  document.getElementById("AccretionPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("AccretionPic").style.boxShadow = ``;
  
  document.getElementById("RunoffPic").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.getElementById("RunoffPic").style.boxShadow = ``;
  
}

// -------------------- Go to top/bottom
function goToTop() {
  iframe.contentWindow.goToTop();
} 

function goToBottom() {
  iframe.contentWindow.goToBottom();
} 

function deactivateArrows() {
  deactivateArrow("ArrowDown");
  deactivateArrow("ArrowUp");
}

function activateArrow(id) {
  let arrow = document.getElementById(id)
  
  arrow.style.pointerEvents = "auto";
  arrow.style.transform = 'translateY(0px)';
  
  arrow.addEventListener('mouseenter', () => { bobArrowUp(id); }, true);
  arrow.addEventListener('mouseleave', () => { bobArrowDown(id); }, true);
  arrow.addEventListener('mouseup', () => { deactivateArrow(id); }, true);
}

function deactivateArrow(id) {
  let arrow = document.getElementById(id)
  
  arrow.style.pointerEvents = "none";
  arrow.style.transform = "translateY(200px)";
  
  arrow.removeEventListener('mouseenter', () => { bobArrowUp(id); }, true);
  arrow.removeEventListener('mouseleave', () => { bobArrowDown(id); }, true);
  arrow.removeEventListener('mouseup', () => { deactivateArrow(id); }, true);
}

function bobArrowUp(id) {
  document.getElementById(id).style.transform = 'translateY(-25px)';
}
function bobArrowDown(id) {
  document.getElementById(id).style.transform = 'translateY(0px)';
}

function scrolled(position) {
  let down_arrow = document.getElementById("ArrowDown");
  let up_arrow = document.getElementById("ArrowUp");
  
  switch (position) {
    case 0:
      // at top
      activateArrow("ArrowDown");
      deactivateArrow("ArrowUp");
      break;
    case 1:
      // At bottom
      activateArrow("ArrowUp");
      deactivateArrow("ArrowDown");
      break;
    case 2:
      activateArrow("ArrowDown");
      activateArrow("ArrowUp");
      break;
  }
}

// -------------------- Error 404
async function handleLoad() {
// (Mostly) fixes bugs with clicking on pages that don't exist. 
// Likely deprecated once all nav click buttons have been filled? 
// We'll see abt sub pages.
  const urlExists = await ifUrlExist(document.getElementById('iframe').src)
  if (!urlExists && on404) {
    ON_404 = false;
    setAllBlack();
    document.getElementById("Title").innerHTML = "Invasive Website";
    document.getElementById('RightNav').src = "/img/nav/nav_right_magenta.jpg";
    document.getElementById("HomePic").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    document.getElementById("HomePic").style.boxShadow = `-1px -3px 0 2px #000 inset, -2px -4px 0 3px rgba(0, 0, 0, 0.5) inset, 1px 0px 0 1px rgba(255, 255, 255, 0.75) inset, 2px 1px 0 2px rgba(255, 255, 255, 0.3) inset`;
  } else if (!urlExists) {
    ON_404 = true;
  } else {
    ON_404 = false;
  }
}

// ---------------------------------------------- utility
async function ifUrlExist(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "HEAD"
        }).then(response => {
            resolve(response.status.toString()[0] === "2")
        }).catch(error => {
            reject(false)
        })
    })
}

const delay = millis => new Promise((resolve, reject) => {
  setTimeout(_ => resolve(), millis)
});

// ---------------------------------------------- public
// ------------------------------------------------------------------------ LISTENERS
window.addEventListener('resize', adjustSize);
$('#iframe').on('load', function() {
    handleLoad();
});

document.getElementById('ArrowDown').addEventListener('mouseenter', () => {
  document.getElementById('ArrowDown').style.transform = 'translateY(-25px)';
});
document.getElementById('ArrowDown').addEventListener('mouseleave', () => {
  document.getElementById('ArrowDown').style.transform = 'translateY(0px)';
});

document.getElementById('ArrowUp').addEventListener('mouseenter', () => {
  document.getElementById('ArrowUp').style.transform = 'translateY(-25px)';
});
document.getElementById('ArrowUp').addEventListener('mouseleave', () => {
  document.getElementById('ArrowUp').style.transform = 'translateY(0px)';
});
init();