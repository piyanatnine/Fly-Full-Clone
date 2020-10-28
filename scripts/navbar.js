var scrollPos = 0;
var up = false;
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos) up = true;
	else up = false;
	scrollPos = (document.body.getBoundingClientRect()).top;
});

window.addEventListener("scroll", function(event) {
    if(up && document.body.getBoundingClientRect().top != 0){
        document.getElementById("navBar").setAttribute("style", "visibility: visible; animation: showNav 0.5s linear;");
    }
    else{
        document.getElementById("navBar").setAttribute("style", "animation: hideNav 0.5s linear;");
    }
  });
