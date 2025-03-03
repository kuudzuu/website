// ------------------------------------------------------------------------ VARIABLES
let GLOBALS = getJSON("/json/global_down.json"); // await???
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
function pageInit() {
  document.body.innerHTML = "<div id=\"AllContainer\"><div onscroll=\"scrolled()\" id=\"PageContainer\">" + document.body.innerHTML + "</div><div id=\"NavSpacer\"></div></div>";
}

async function getJSON(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

function goToTop() {
  let divElement = document.getElementById('PageContainer');
  divElement.scrollTop = 0;
  scrolled();
} 

function goToBottom() {
  let divElement = document.getElementById('PageContainer');
  divElement.scrollTop = divElement.scrollHeight;
  scrolled();
} 

function scrolled() {
  if (window.top != window) {
  let curr_height = document.getElementById('PageContainer').scrollTop;
  let max_height = document.getElementById('PageContainer').scrollHeight - document.getElementById('PageContainer').offsetHeight;
    if (curr_height <= 5) {
      // At top
      window.top.scrolled(0);
    } else if (curr_height >= max_height-5) {
      // At bottom
      window.top.scrolled(1);
    } else {
      // Middle
      window.top.scrolled(2);
    }
  }
}

function disableScrolling() {
  document.getElementById('PageContainer').style.overflowY = "hidden";
}
// ---------------------------------------------- private
// ---------------------------------------------- utility
// ------------------------------------------------------------------------ RUNNERS
// ------------------------------------------------------------------------ LISTENERS
window.addEventListener("load", window.top.endTransition);