function swipeWork(direction){
  var carousel = document.getElementById("carouselControl")
  var nowAt = parseInt(carousel.getAttribute("nowAt"));
  if(direction == 0){
    carousel.setAttribute("nowAt", nowAt + (nowAt < 9? 1:0));
  }
  else{
    carousel.setAttribute("nowAt", nowAt - (nowAt > 0? 1:0));
  }
  carousel.setAttribute("style", "transform: translateX(" + (-71 * parseInt(carousel.getAttribute("nowAt"))) + "vw);");
}

window.addEventListener("wheel", function(event) {
  event.stopImmediatePropagation();
    if(event.deltaY < 0){
        swipeWork(0);
    }
    else{
      swipeWork(1);
    }
  });

  /*
  var oldScroll = 0;
  document.getElementById("carouselScroller").addEventListener("scroll", function(event) {
    document.getElementById("carouselScroller").setAttribute("style", "overflow-x: hidden");
    event.preventDefault();
    event.stopPropagation();
    console.log("new scroll= " + document.getElementById("carouselScroller").scrollLeft + " old=" + oldScroll);
    if(event.pageX < oldScroll){
      swipeWork(0);
    }
    else{
      swipeWork(1);
    }
    document.getElementById("carouselScroller").setAttribute("style", "overflow-x: scroll");
    oldScroll = document.getElementById("carouselScroller").scrollLeft;
  });
*/


var oldX = 0;
window.addEventListener("dragstart", function(event) {
  event.stopImmediatePropagation();
    oldX = event.pageX;
  });

  window.addEventListener("dragend", function(event) {
    event.stopImmediatePropagation();
    if(event.pageX < oldX){
        swipeWork(0);
    }
    else{
      swipeWork(1);
    }
  });