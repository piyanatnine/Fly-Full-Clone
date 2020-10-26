//For scroll with long image
window.addEventListener("scroll", function(event) {
    var toBeFixed = document.getElementById("infoToBeFixed");
    var info = document.getElementById("info");
    if (info.getBoundingClientRect().top <= 0 && info.getBoundingClientRect().bottom - window.screen.height*7.6/12 >= 0) {
      toBeFixed.setAttribute("style", "margin-top:" + Math.abs(parseInt(info.getBoundingClientRect().top)) + "px;");
    }
  }, false)