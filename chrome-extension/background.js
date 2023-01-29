chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("background");
  console.log(request.greeting);
  sendResponse({ farewell: "ack" });
});
