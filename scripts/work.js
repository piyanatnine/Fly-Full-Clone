function swipeWork(direction){
  var carousel = document.getElementById("carouselControl")
  var nowAt = parseInt(carousel.getAttribute("nowAt"));
  if(direction == 0){
    carousel.setAttribute("nowAt", nowAt + (nowAt < 9? 1:0));
  }
  else{
    carousel.setAttribute("nowAt", nowAt - (nowAt > 0? 1:0));
  }
  carousel.setAttribute("style", "transform: translateX(" + (-70 * parseInt(carousel.getAttribute("nowAt"))) + "vw);");
}

window.addEventListener("wheel", function(event) {
    if(event.deltaY < 0){
        swipeWork(0);
    }
    else{
      swipeWork(1);
    }
  });


var oldX = 0;
window.addEventListener("drag", function(event) {
    if(event.pageX < oldX){
        swipeWork(0);
    }
    else{
      swipeWork(1);
    }
    oldX = event.pageX;
  });