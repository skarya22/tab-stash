document.getElementById("summarize").onclick = function () {
  switchvisibility(document.getElementById("summaryanswer"));
};

function switchvisibility(x) {
  if (x.style.visibility == "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}
