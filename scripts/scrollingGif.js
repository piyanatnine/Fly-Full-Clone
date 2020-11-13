var scrollingGif = document.getElementsByClassName("scrollingGif");
window.addEventListener("scroll", function(event) {
    for(var img of scrollingGif){
        var style = img.currentStyle || window.getComputedStyle(img);
        if(img.getAttribute("tag") == null){
            img.setAttribute("tag", style.top);
        }
        var originTop = parseInt(img.getAttribute("tag"));
        if(up){
            img.setAttribute("style", "top:" + (parseInt(style.top) >= originTop + 60? originTop + 60: parseInt(style.top) + 1) + "px");
        }
        else{
            img.setAttribute("style", "top:" + (parseInt(style.top) <= originTop - 60? originTop - 60: parseInt(style.top) - 1) + "px");
        }
    }
  })