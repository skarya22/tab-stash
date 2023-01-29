var port = chrome.runtime.connect({ name: "knockknock" });

window.addEventListener("load", function () {
  let bodyText = document.body.innerText;
  port.postMessage({ joke: bodyText });
  console.log(bodyText);
});

chrome.extension.onRequest.addListener(function (
  request,
  sender,
  sendResponse
) {
  if (request.method == "getSelection") {
    console.log(window.getSelection().toString());
    sendResponse({ data: window.getSelection().toString() });
  } else {
    console.log("no selection");
    sendResponse({}); // snub them.
  }
});
