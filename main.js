var btn = document.querySelector("button");
var line = document.querySelector("progress");
var level = Number(line.value);
function levelUp() {
  level++;
  line.value = level;
  if (level > 100) {
    level = 0;
    line.value = level;
    btn.textContent = "Click me";
  } else if (level === 100) {
    btn.textContent = "Reset";
  }
  var count = level;
  var para = document.querySelector("p");
  para.textContent = "You click: " + count + " /100";
}

btn.addEventListener("click", levelUp);
