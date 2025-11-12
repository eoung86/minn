let bool = true;
document.querySelector("#family").onclick = function (e) {
  e.preventDefault();
  if (bool) {
    document.querySelector(".hvr").style.height = "250px";
  } else {
    document.querySelector(".hvr").style.height = "0";
  }
  bool = !bool;
};
document.querySelector(".hover").onmouseenter = function () {
  document.querySelector(".sv").style.display = "block";
};
document.querySelector(".icon").onmouseleave = function () {
  document.querySelector(".sv").style.display = "none";
};
document.querySelector(".sv").onmouseleave = function () {
  document.querySelector(".sv").style.display = "none";
};
