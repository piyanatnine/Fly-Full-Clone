//For scroll with long image, please reload page to test responsive design
//Uses up from navbar.js

window.addEventListener("scroll", function(event) {
    var toBeFixed = document.getElementById("infoToBeFixed");
    var info = document.getElementById("info");
    if (info.getBoundingClientRect().top <= 0 && (document.getElementById("longImg").getBoundingClientRect().bottom - toBeFixed.getBoundingClientRect().top > 400 || (up && toBeFixed.getBoundingClientRect().bottom > 400)) && window.screen.width >= 1000) {
      toBeFixed.setAttribute("style", "margin-top:" + Math.abs(parseInt(info.getBoundingClientRect().top)) + "px;");
    }
  }, false)

  window.addEventListener("scroll", function(event) {
    var toBeFixed = document.getElementById("longImgMove");
    var info = document.getElementById("longImgStill");
    if (info.getBoundingClientRect().top <= 0 && (Math.abs(info.getBoundingClientRect().bottom - toBeFixed.getBoundingClientRect().bottom) < 500 || up) && window.screen.width >= 1000) {
      toBeFixed.setAttribute("style", "margin-top:" + parseInt(info.getBoundingClientRect().top) + "px;");
    }
  }, false)