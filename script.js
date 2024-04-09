// input
let red = document.getElementById("redIn");
let green = document.getElementById("greenIn");
let blue = document.getElementById("blueIn");

let display = document.getElementById("display");
let show = document.getElementById("rgbText");

let whitebtn = document.getElementById("white");
let blackbtn = document.getElementById("black");
//  process
document.getElementById("btn").addEventListener("click", proceed);

// output
function proceed() {
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;

  display.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  show.innerHTML = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

whitebtn.addEventListener("click", whitepress);

function whitepress() {
  display.style.backgroundColor = ` rgb(255,255,255)`;
  show.innerHTML = `rgb(255,255,255)`;
}

blackbtn.addEventListener("click", blackpress);

function blackpress() {
  display.style.backgroundColor = ` rgb(0,0,0)`;
  show.innerHTML = `rgb(0,0,0)`;
}
