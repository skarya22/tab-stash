window.addEventListener("load", function () {
  let bodyText = document.body.innerText;
  //request
  (async () => {
    const response = await chrome.runtime.sendMessage({ greeting: bodyText });
    // do something with response here, not outside the function
    console.log(response);
  })();
  //request
});
