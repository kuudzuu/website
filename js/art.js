// ------------------------------------------------------------------------ VARIABLES
let IS_ART = false;
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private
function init() {
  loadArt();
}

async function loadArt() {
  if (!IS_ART) {
    IS_ART = true;
    injectPictures();
    
    let texture = document.getElementById("TextureTransition");
    texture.addEventListener('mouseenter', () => {
      texture.style.filter = 'brightness(1)';
    });
    texture.addEventListener('mousedown', () => {
      texture.style.filter = 'brightness(1.5)';
    });
    texture.addEventListener('mouseleave', () => {
      texture.style.filter = 'brightness(0.3)';
    }); 
    texture.style.filter = 'brightness(0.3)';
    texture.style.cursor = "pointer";
    
    let art = document.getElementById("ArtTransition");
    art.addEventListener('mouseenter', () => {
      art.style.filter = 'brightness(1)';
    });
    art.addEventListener('mousedown', () => {
      art.style.filter = 'brightness(1)';
    });
    art.addEventListener('mouseleave', () => {
      art.style.filter = 'brightness(1)';
    }); 
    art.style.filter = 'brightness(1)';
    art.style.cursor = "default";
  }
}

async function loadTextures() {
if (IS_ART) {
    IS_ART = false;
    injectTextures();
    
    let texture = document.getElementById("TextureTransition");
    texture.addEventListener('mouseenter', () => {
      texture.style.filter = 'brightness(1)';
    });
    texture.addEventListener('mousedown', () => {
      texture.style.filter = 'brightness(1)';
    });
    texture.addEventListener('mouseleave', () => {
      texture.style.filter = 'brightness(1)';
    }); 
    texture.style.filter = 'brightness(1)';
    texture.style.cursor = "default";
    
    let art = document.getElementById("ArtTransition");
    art.addEventListener('mouseenter', () => {
      art.style.filter = 'brightness(1)';
    });
    art.addEventListener('mousedown', () => {
      art.style.filter = 'brightness(1.5)';
    });
    art.addEventListener('mouseleave', () => {
      art.style.filter = 'brightness(0.3)';
    }); 
    
    art.style.filter = 'brightness(0.3)';
    art.style.cursor = "pointer";
  }
}

async function injectPictures() {
  let pictures = await getJSON("/json/art.json");
  let innerHTML = "<br>";

  for (let i = 0; i < pictures.length; i++) {
    innerHTML += "<div><h2>" + pictures[i].title + "</h2></div>";
    innerHTML += "<div><img src=\"" + pictures[i].url + "\" class=\"ArtPicture\"></div>";
    innerHTML += "<div class=\"Caption\"><p><i>" + pictures[i].desc + "</i></p></div>";
    innerHTML += (i === pictures.length-1 ? "<br><br>" : "<br><hr><br>");
  }
  
  document.getElementById("ArtContent").innerHTML = innerHTML;
}

async function injectTextures() {
  let textures = await getJSON("/json/texture.json");
  let innerHTML = "<br>";
  
  for (let i = 0; i < textures.length; i++) {
    innerHTML += "<img src=\"" + textures[i].url + "\" class=\"TexturePicture\">";
  }
  
  document.getElementById("ArtContent").innerHTML = innerHTML;
}

function showFingers() {
  document.getElementById("FingersBottomLeft").style.display = "initial";
  document.getElementById("FingersBottomRight").style.display = "initial";
}

// ---------------------------------------------- utility
// ------------------------------------------------------------------------ LISTENERS
window.addEventListener("load", showFingers);
// ------------------------------------------------------------------------ RUNNERS
pageInit();
init();