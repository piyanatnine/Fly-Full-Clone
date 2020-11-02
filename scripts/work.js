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
  event.preventDefault();
    if(event.deltaY < 0){
        swipeWork(0);
    }
    else{
      swipeWork(1);
    }
  });

  var oldScroll = 0;
  document.getElementById("carouselScroller").addEventListener("scroll", function(event) {
    event.preventDefault();
    console.log("new scroll= " + document.getElementById("carouselScroller").scrollLeft + " old=" + oldScroll);
    if(event.pageX < oldScroll){
      swipeWork(0);
    }
    else{
      swipeWork(1);
    }
    oldScroll = document.getElementById("carouselScroller").scrollLeft;
    event.stopImmediatePropagation();
  });

var oldX = 0;
var goingLeft = false;
window.addEventListener("drag", function(event) {
  event.preventDefault();
  console.log("new= " + event.pageX + " old= " + oldX);
    if(event.pageX < oldX) goingLeft = true;
    else goingLeft = false;
    oldX = event.pageX;
  });

  window.addEventListener("dragend", function(event) {
    event.preventDefault();
    if(goingLeft){
        swipeWork(0);
    }
    else{
      swipeWork(1);
    }
    alert(goingLeft);
  });