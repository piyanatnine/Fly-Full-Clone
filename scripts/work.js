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