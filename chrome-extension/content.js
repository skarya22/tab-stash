var timer = 0;
var si = setInterval(() => {
  try {
    chrome.runtime.sendMessage(
      {
        data: "Hello popup, how are you",
      },
      function (response) {
        console.dir(response);
      }
    );
    timer++;
    if (timer === 5) {
      clearInterval(si);
    }
  } catch (error) {
    // debugger;
    console.log(error);
  }
}, 2000);

window.addEventListener("load", function () {
  let bodyText = document.body.innerText;
  console.log(bodyText);
});

// chrome.browserAction.onclick.addListener(function () {
//   chrome.tabs.getCurrent(function (_tabId) {
//     if (_tabId) {
//       chrome.storage.local.get(_tabId, function (result) {
//         alert("Selection restored: " + result[tabId].txt);
//       });
//     }
//   });
// });
