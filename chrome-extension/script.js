// SUMMARIZE BUTTON

document.getElementById("summarize").onclick = function () {
  switchvisibility(document.getElementById("summaryanswer"));
  document.getElementById("summaryanswer-input").value =
    "Material You is Google’s big new theming engine it launched last year alongside Android 12, and it has been spreading to many Android apps since. However, the dynamic interface theming option hasn’t spread beyond Google’s own platforms just yet, with it remaining locked to Android only. The latest Chrome Canary release, version 110, is changing that and brings Material You to Mac, Windows, ChromeOS, and Linux. Since Chrome doesn’t hook into your computer’s desktop wallpaper, it works a little differently than on Android. As spotted by Redditor u/Leopeva64-2, the Chrome interface dynamically takes on the dominant colors from the wallpaper you choose for your new tab page. To make this work, you first need to enable the chrome://flags/#customize-chrome-color-extraction flag.";
  switchvisibility(document.getElementById("label-input-container"));
  switchvisibility(document.getElementById("selected-labels-list"));
};

document.getElementById("question-button").onclick = function () {
  switchvisibility(document.getElementById("questionanswer"));
  switchvisibility(document.getElementById("label-input-container2"));
  switchvisibility(document.getElementById("selected-labels-list2"));
};

document.getElementById("stash1").onclick = function (x) {
  switchToCheck(this);
};

document.getElementById("stash2").onclick = function (x) {
  switchToCheck(this);
};

var switchToCheck = function (x) {
  console.log(x);
  x.innerHTML = "check_circle";
  x.style.color = "#4285F4";
};

// INSERT LABELS IN SUMMARY SECTION
var labels = ["penguins", "elephants"];
var list = document.getElementById("label-input-list");
labels.forEach(function (item) {
  var option = document.createElement("option");
  option.value = item;
  list.appendChild(option);
});

var selected_labels = [];

var label_input = document.getElementById("label-input");
label_input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var label = label_input.value;
    if (label.length > 0) {
      selected_labels.push(label);
      var list = document.getElementById("selected-labels-list");
      var item = document.createElement("li");
      item.setAttribute("id", "selected-labels-list-item");
      item.innerHTML = label;
      list.appendChild(item);
      label_input.value = "";
    }
  }
});

// INSERT LABELS IN QUESTION SECTION
var labels2 = ["penguins", "elephants"];
var list2 = document.getElementById("label-input-list2");
labels2.forEach(function (item) {
  var option = document.createElement("option");
  option.value = item;
  list2.appendChild(option);
});

var selected_labels2 = [];

var label_input2 = document.getElementById("label-input2");
label_input2.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var label = label_input2.value;
    if (label.length > 0) {
      selected_labels2.push(label);
      var list2 = document.getElementById("selected-labels-list2");
      var item2 = document.createElement("li");
      item2.setAttribute("id", "selected-labels-list-item2");
      item2.innerHTML = label;
      list2.appendChild(item2);
      label_input2.value = "";
    }
  }
});

// helper function
function switchvisibility(x, switch_display = true) {
  if (x.style.visibility == "visible") {
    x.style.visibility = "hidden";
    if (switch_display) x.style.display = "none";
  } else {
    x.style.visibility = "visible";
    if (switch_display) x.style.display = "block";
  }
}
