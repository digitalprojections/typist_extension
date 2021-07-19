document.querySelector("#clickbut").onclick = function test(){
    var myText = window.prompt(
        "Tutorial typist",
        "type or paste text"
      );
      var mto;
      
      var myTextArea = document.getElementById("textArea");
            
      var myp = document.getElementById("myp");
      
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
        recType();
      }
}