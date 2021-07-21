chrome.storage.sync.get(["allowed_page"], function (result) {
  console.log("Value currently is " + result.key);
  if (result.key) {
    //TODO not yet implemented. Plan is to start the app on the selected page, automatically
    start();
  }
});

function start() {
  var myText = window.prompt("Tutorial typist", "type or paste text");
  var mto;
  var mydiv = document.createElement("div");
  mydiv.id = "textArea";
  var myTextArea = mydiv;

  var myp = document.createElement("p");
  myp.setAttribute("style", "font-size:xxx-large; font-family: cursive;");
  mydiv.append(myp);

  myp.innerHTML = "";
  function recType() {
    //console.log(myText);
    clearTimeout(mto);
    //bu yerda ayni funktsiyani qayta va qayta chaqirish orqali, ekranga matnni yozib chiqaramiz.
    if (myText.length > 0) {
      myp.innerHTML += myText[0];
      myText = myText.slice(1, myText.length);
      mto = setTimeout(recType, 100);
    }
  }
  var result = window.confirm("Start typing?");
  if (result) {
    document.body.innerHTML = "";
    document.body.append(mydiv);
    recType();
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({ message: "response from content" });

  var rm = request.message;
  console.log("Hi from content " + rm);
  if (rm == "start") {
    console.log("starting the tutorial builder");
    ///////////////////////////////// CODE HERE ///////////////////////////////////////
    start();
    ///////////////////////////////// CODE HERE ///////////////////////////////////////
  }
});
