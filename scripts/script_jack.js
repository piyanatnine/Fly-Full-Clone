//For scroll with long image, please reload page to test responsive design
//Uses up from navbar.js

window.addEventListener("scroll", function(event) {
    var toBeFixed = document.getElementById("infoToBeFixed");
    var info = document.getElementById("info");
    if (info.getBoundingClientRect().top <= 0 && (document.getElementById("longImg").getBoundingClientRect().bottom - toBeFixed.getBoundingClientRect().top > 400 || (up && toBeFixed.getBoundingClientRect().bottom > 400)) && window.screen.width >= 1000) {
      toBeFixed.setAttribute("style", "margin-top:" + Math.abs(parseInt(info.getBoundingClientRect().top)) + "px;");
    }
  }, false)

  var longImgLimit = 500;
  var longImgAdjust = 0;
  var longImgDamper = 1;
  window.addEventListener("scroll", function(event) {
    var toBeFixedLong = document.getElementById("longImgMove");
    var infoLong = document.getElementById("longImgStill");
    if (infoLong.getBoundingClientRect().top <= 0 && (Math.abs(infoLong.getBoundingClientRect().bottom - toBeFixedLong.getBoundingClientRect().bottom) < longImgLimit || up) && window.screen.width >= 1000) {
      toBeFixedLong.setAttribute("style", "margin-top:" + ((parseFloat(infoLong.getBoundingClientRect().top) / longImgDamper) + longImgAdjust) + "px;");
    }
  }, false)