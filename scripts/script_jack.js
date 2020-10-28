//For scroll with long image, please reload page to test responsive design

var scrollPos = 0;
var up = false;
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos) up = true;
	else up = false;
	scrollPos = (document.body.getBoundingClientRect()).top;
});

window.addEventListener("scroll", function(event) {
    var toBeFixed = document.getElementById("infoToBeFixed");
    var info = document.getElementById("info");
    if (info.getBoundingClientRect().top <= 0 && (document.getElementById("longImg").getBoundingClientRect().bottom - toBeFixed.getBoundingClientRect().top > 400 || (up && toBeFixed.getBoundingClientRect().bottom > 400)) && window.screen.width >= 1000) {
      toBeFixed.setAttribute("style", "margin-top:" + Math.abs(parseInt(info.getBoundingClientRect().top)) + "px;");
    }
  }, false)