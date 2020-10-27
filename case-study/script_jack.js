//For scroll with long image, please reload page to test responsive design

window.addEventListener("scroll", function(event) {
    var toBeFixed = document.getElementById("infoToBeFixed");
    var info = document.getElementById("info");
    if (info.getBoundingClientRect().top <= 0 && document.getElementById("longImg").getBoundingClientRect().bottom > toBeFixed.getBoundingClientRect().top && window.screen.width >= 1000) {
      toBeFixed.setAttribute("style", "margin-top:" + Math.abs(parseInt(info.getBoundingClientRect().top)) + "px;");
    }
  }, false)