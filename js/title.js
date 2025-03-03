// ------------------------------------------------------------------------ VARIABLES
// ------------------------------------------------------------------------ FUNCTIONS
// ---------------------------------------------- public
// ---------------------------------------------- private
function websiteAnimate() {
  document.getElementById("KuudzuLogo").animate(
    [
      // keyframes
      { transform: "translateX(0px)" },
      { transform: "translateX(15px)" },
      { transform: "translateX(0px)" },
      { transform: "translateX(-15px)" },
      { transform: "translateX(0px)" },
    ],
    {
      // timing options
      duration: 15000,
      iterations: Infinity,
      easing: "cubic-bezier(.13,2,.77,-0.84)",
      composite: "add",
    }
  );
  document.getElementById("KuudzuLogo").animate(
    [
      // keyframes
      { transform: "translateY(0px)" },
      { transform: "translateY(10px)" },
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)" },
      { transform: "translateY(0px)" },
      { transform: "translateY(10px)" },
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)" },
      { transform: "translateY(0px)" },
    ],
    {
      // timing options
      duration: 20000,
      iterations: Infinity,
      easing: "cubic-bezier(.13,2,.77,-0.84)",
      composite: "add",
    }
  );
}
// ---------------------------------------------- utility
// ------------------------------------------------------------------------ LISTENERS
// ------------------------------------------------------------------------ RUNNERS
pageInit();
websiteAnimate();
disableScrolling();