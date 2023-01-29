window.onload = function () {
  let labels = [];
  let label_ids = [];
  // SUMMARIZE BUTTON
  var text = "";
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(request.greeting);
    text = request.greeting;
  });

  document.getElementById("summarize").onclick = function () {
    document.getElementById("stash1").onclick = function (x) {
      console.log(document.location.href);
      console.log(
        selected_labels.map((label) => label_ids[labels.indexOf(label)])
      );

      fetch("http://127.0.0.1:8000/stash/createStash", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: 2,
          text: document.getElementById("summaryanswer-input").value,
          url: document.location.href,
          stash_type: "summary",
          date_created: "2021-05-01",
          labels: selected_labels.map(
            (label) => label_ids[labels.indexOf(label)]
          ),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      switchvisibility(document.getElementById("summaryanswer"));
      // switchvisibility(document.getElementById("label-input-container"));
      // switchvisibility(document.getElementById("selected-labels-list"));
      switchToCheck(this);
    };
    switchvisibility(document.getElementById("summaryanswer"));
    switchvisibility(document.getElementById("label-input-container"));
    switchvisibility(document.getElementById("selected-labels-list"));
  };

  setTimeout(() => {
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
  }, 60);

  var switchToCheck = function (x) {
    console.log(x);
    x.innerHTML = "check_circle";
    x.style.color = "#4285F4";
  };

  // INSERT LABELS IN SUMMARY SECTION

  fetch("http://127.0.0.1:8000/label/getLabels/2/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      labels = data.map((label) => label.name);
      label_ids = data.map((label) => label.id);
      console.log(labels);
      var list = document.getElementById("label-input-list");
      var list2 = document.getElementById("label-input-list2");
      labels.forEach(function (item) {
        var option = document.createElement("option");
        option.value = item;
        list.appendChild(option);
        list2.appendChild(option);
      });
    });

  var selected_labels = [];

  var label_input = document.getElementById("label-input");
  label_input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      var label = label_input.value;
      if (label.length > 0) {
        if (labels.includes(label) == false) {
          fetch("http://127.0.0.1:8000/label/createLabel", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: label, user: 2 }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              labels.push(data.name);
              label_ids.push(data.id);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
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
};
