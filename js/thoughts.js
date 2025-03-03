// ------------------------------------------------------------------------ VARIABLES
INTRO_LEFT = `<div id="Horizontal"></div>
<div id="LeftJust"><div id="TextDiv">`

INTRO_RIGHT = `<div id="Horizontal"></div>
<div id="RightJust"><div id="TextDiv">`

ENDING = "</div></div>"
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private
function init() {
  injectText();
}

async function injectText() {
  let thoughts = await getJSON("/json/thoughts.json");
  var innerHTML = "";
  
  for (let i = 0; i < thoughts.length; i++) {
    innerHTML += (i%2===0 ? INTRO_LEFT : INTRO_RIGHT) + thoughts[i].text + "\n" + ENDING + "\n"; 
  }
  
  innerHTML += `<div id="Horizontal"></div>`;
  
  document.getElementById("ProcessingImport").innerHTML += innerHTML;
}
// ---------------------------------------------- utility
// ------------------------------------------------------------------------ LISTENERS
// ------------------------------------------------------------------------ RUNNERS
pageInit();
init();