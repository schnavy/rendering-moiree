let body = document.querySelector("body");
let griddies = document.querySelector("#griddies");
let txt = document.querySelector("#txt");
let txt2 = document.querySelector("#txt2");
let wWidth = window.innerWidth-100;
let wHeight = window.innerHeight - 25;

let vz = true;

document.addEventListener("mousemove", (e) => {
  let l = griddies.querySelectorAll(".ding").length;
  txt.style.top = map(e.clientX, 0, wWidth, 0, wHeight) + "px";
  txt.style.left = map(e.clientY, 0, wHeight, 0, wWidth) + "px";

  txt2.style.top = map(e.clientX, wWidth, 0, wHeight, 0) + "px";
  txt2.style.left = map(e.clientY, wHeight, 0, wWidth, 0) + "px";

  if (l > 3000) {
    vz = false;
  } else if (l <= 1) {
    vz = true;
  }

  vz ? add() : remove();
  vz ? add() : remove();
  vz ? add() : remove();
  vz ? add() : remove();

});

function add() {
  let ding = document.createElement("div");
  ding.classList.add("ding");
  griddies.append(ding);
}
function remove() {
  let dings = griddies.querySelectorAll(".ding");
  dings[dings.length - 1].remove();
}

function map(v, x1, x2, y1, y2) {
  let p = Math.abs(v / (x2 - x1));
  return Math.abs((y2 - y1) * p + y1);
}
