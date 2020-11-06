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
  nowAt = parseInt(carousel.getAttribute("nowAt"));
  if(nowAt == 0){
    document.getElementById("arrow1").setAttribute("class", "arrowDisabled");
  }
  else if(nowAt == 9){
    document.getElementById("arrow2").setAttribute("class", "arrowDisabled");
  }
  else{
    document.getElementById("arrow1").setAttribute("class", "");
    document.getElementById("arrow2").setAttribute("class", "");
  }
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
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    document.getElementById("carouselScroller").setAttribute("style", "overflow-x: hidden");
    if(event.pageX < oldScroll){
      swipeWork(0);
    }
    else{
      swipeWork(1);
    }
    document.getElementById("carouselScroller").setAttribute("style", "overflow-x: scroll");
    oldScroll = document.getElementById("carouselScroller").scrollLeft;
  });*/



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


document.getElementById("rubrikBtn").onclick = function (){
  document.getElementById("showAll").setAttribute("tag", "Active");
}